import { stat, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import os from "node:os";
import glob from "glob";

const data = [];
await Promise.all((await promisify(glob)('src/docs/**/*.mdx')).map(async v => {
    const { mtime } = await stat(v);
    data.push([
        '    <url>',
        `         <loc>https://misonou.pages.dev/${v.replace('src/', '').replace('.mdx', '')}</loc>`,
        `         <lastmod>${mtime.toISOString().slice(0, 10)}</lastmod>`,
        '    </url>',
    ]);
}));
data.sort((a, b) => a[1].localeCompare(b[1]));
data.unshift(
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
);
data.push('</urlset>');
await writeFile('public/sitemap.xml', data.flatMap(v => v).join(os.EOL), 'utf8');
