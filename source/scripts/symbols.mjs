import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const packages = JSON.parse(fs.readFileSync('src/data/versions.json', 'utf8'));
const tsConfig = JSON.parse(fs.readFileSync('tsconfig.path.json', 'utf8'));
const result = {};

function sortObject(exports) {
    return Object.fromEntries(Object.entries(exports).sort((a, b) => a[0].localeCompare(b[0])));
}

function getRepoName(dir) {
    let packageJson = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'));
    let repo = packageJson.repository;
    if (typeof repo === 'string') {
        return repo.replace('github:', '');
    } else {
        return repo.url.replace(/^(git\+)?(https:\/\/|git@)github.com[:/]/, '').replace(/\.git$/, '');
    }
}

function processPackage(pkg, version, dir) {
    if (!fs.existsSync(path.join(dir, 'package.json'))) {
        dir = path.dirname(dir);
    }
    const execOpts = { cwd: dir, encoding: 'utf8' };
    const repo = getRepoName(dir);
    const tag = execSync('git tag', execOpts).split('\n').find(v => v === version || (v[0] === 'v' && v.slice(1) === version));
    const commitId = execSync(`git rev-list -n 1 ${tag}`, execOpts).trim();
    const symbols = {};

    fs.globSync('**/*.{js,ts,tsx}', { cwd: dir, exclude: ['**/{node_modules,dev,dist,build,coverage,tests}/**'], }).forEach((file) => {
        const re = new RegExp(`^(export ${file.endsWith('.d.ts') ? '|    ' : ''})?((?:default )?(?:function\*?|async function\*?|interface|class|abstract class|type)|declare const|const|default) (\\w[^(< ;:]*)`);
        const repoPath = file.replace(/\\/g, '/');
        const content = execSync(`git show ${commitId}:${repoPath}`, execOpts);
        const dict = {};
        const names = {};

        let isExportClause = false;
        content.split('\n').forEach((line, index) => {
            if (line === 'export {') {
                isExportClause = true;
                return;
            }
            if (isExportClause) {
                if (line[0] === '}') {
                    isExportClause = false;
                } else if (line[0] === ' ') {
                    names[/\S+/.test(line) && RegExp["$&"]] = true;
                }
                return;
            }
            let [value, exported, keyword, name] = re.exec(line) || [];
            if (name && name !== 'null') {
                dict[name] = dict[name] || `${repoPath}#L${index + 1}`;
                if (exported ? (keyword !== 'default' || line[value.length] !== '(') : keyword !== 'const' && keyword !== 'declare const') {
                    names[name] = true;
                }
            }
        });
        for (const i in names) {
            if (dict[i]) {
                symbols[i] = Array.isArray(symbols[i]) ? symbols[i].concat(dict[i]) : symbols[i] ? [symbols[i], dict[i]] : dict[i];
            }
        }
    });

    for (let i in symbols) {
        if (Array.isArray(symbols[i])) {
            symbols[i].sort();
        }
    }
    return {
        baseUrl: `https://github.com/${repo}/blob/${commitId}`,
        symbols: sortObject(symbols)
    };
}

function getSourceLocations(pkg) {
    if (!result[pkg] && packages[pkg]) {
        const dir = tsConfig.compilerOptions.paths[pkg]?.[0] || `../${pkg.replace('@misonou/', '')}`
        if (fs.existsSync(dir)) {
            result[pkg] = processPackage(pkg, packages[pkg], dir);
        }
    }
    return result[pkg] || {};
}

if (import.meta.main) {
    const [, , command, pkg] = process.argv;
    switch (command) {
        case '--show':
            console.log(getSourceLocations(pkg));
            break;

        default:
            const outPath = 'src/data/symbols.json';
            if (command in packages) {
                Object.assign(result, JSON.parse(fs.readFileSync(outPath, 'utf8')));
                delete result[command];
                getSourceLocations(command);
            } else {
                for (let i in packages) {
                    getSourceLocations(i);
                }
            }
            fs.writeFileSync(outPath, JSON.stringify(sortObject(result), null, 4), 'utf8');
            break;
    }
}
