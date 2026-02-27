import { writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';

(async function () {
    const packages = [
        'zeta-dom',
        'zeta-dom-react',
        'brew-js',
        'brew-js-react',
        'jq-scrollable',
        'waterpipe',
        'waterpipe-parser',
        '@misonou/react-app-utils',
        '@misonou/react-css-utils',
        '@misonou/brew-extension-auth',
    ];
    const entries = await Promise.all(
        packages.map(async (v) => {
            const { stdout } = await promisify(exec)(`npm view ${v} version`);
            return [v, stdout.trim()];
        })
    );
    await writeFile('src/data/versions.json', JSON.stringify(Object.fromEntries(entries), null, 4), 'utf8');
})();
