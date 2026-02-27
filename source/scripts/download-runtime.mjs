import { execSync } from "node:child_process"
import { stat, writeFile } from "node:fs/promises";
import semver from "semver";

const [, , version] = process.argv;
const versions = version ?
    [].concat(version) :
    JSON.parse(execSync(`npm view waterpipe versions --json`, 'utf8'));

versions.filter(v => semver.gte(v, '2.6.0') && !semver.prerelease(v)).forEach(async v => {
    const destPath = `runtime/waterpipe/waterpipe-${v}.min.js`;
    try {
        await stat(destPath);
    } catch {
        try {
            const res = await fetch(`https://raw.githubusercontent.com/misonou/waterpipe/refs/tags/v${v}/dist/waterpipe.min.js`);
            const buffer = await res.arrayBuffer();
            await writeFile(destPath, Buffer.from(buffer));
            console.log(`${v} -> ${destPath}`);
        } catch (e) {
            console.error(`Failed to download ${v}`, e);
        }
    }
});
