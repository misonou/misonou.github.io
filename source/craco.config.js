const fs = require('fs');
const { glob } = require('glob');
const path = require('path');
const semver = require('semver');
const webpack = require('webpack');

function resolveModulePath(...paths) {
    for (let v of paths) {
        v = path.resolve(v);
        if (fs.existsSync(v)) {
            return v;
        }
    }
}

function resolveModuleAlias(alias) {
    const result = {};
    for (const [k, v] of Object.entries(alias)) {
        const resolved = resolveModulePath(v);
        if (resolved) {
            result[k] = resolved;
        }
    }
    return result;
}

function getWaterpipeVersions(env) {
    const isDev = env !== 'production' && resolveModulePath('../waterpipe');
    const versions = [];

    glob.sync('runtime/waterpipe/*.min.js', { absolute: true }).forEach(v => {
        if (/waterpipe-(.+?)\.min\.js$/.test(v)) {
            versions.push(RegExp.$1);
        }
    });
    versions.sort((a, b) => semver.compare(b, a));
    if (isDev) {
        versions.unshift('local');
    }
    return versions;
}

module.exports = async ({ env }) => {
    const RemarkGFM = (await import('remark-gfm')).default;
    return {
        webpack: {
            /** @type {(config: import("webpack").Configuration) => import("webpack").Configuration} */
            configure: function (config) {
                config.module.rules.find(v => v.oneOf).oneOf.unshift(
                    {
                        test: /\.ya?ml$/,
                        loader: 'yaml-loader'
                    },
                );
                const definePlugin = config.plugins.find(v => v instanceof webpack.DefinePlugin);
                definePlugin.definitions['process.env.WATERPIPE_VERSIONS'] = JSON.stringify(getWaterpipeVersions(env));

                return {
                    ...config,
                    devtool: env === 'production' ? false : 'inline-source-map',
                    ignoreWarnings: [
                        ...(config.ignoreWarnings || []),
                        {
                            module: /waterpipe-(.+?)\.min\.js$/,
                            message: /parse source map from/
                        }
                    ],
                    module: {
                        ...config.module,
                        rules: [
                            ...(config.module.rules || []),
                            {
                                test: /\.tsx?$/,
                                rules: [
                                    {
                                        exclude: /node_modules/,
                                        loader: 'babel-loader',
                                        options: {
                                            plugins: [[path.resolve('./scripts/tsx-transform.js'), { include: path.join(process.cwd(), 'src/components/examples') }]]
                                        }
                                    },
                                    {
                                        loader: 'ts-loader',
                                        options: {
                                            allowTsInNodeModules: true,
                                            compilerOptions: {
                                                sourceMap: true,
                                                noEmit: false
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                test: /\.mdx?$/,
                                type: 'javascript/auto',
                                use: [
                                    {
                                        loader: 'babel-loader',
                                        options: {
                                            plugins: [path.resolve('./scripts/mdx-transform.js')]
                                        }
                                    },
                                    {
                                        loader: '@mdx-js/loader',
                                        /** @type {import('@mdx-js/loader').Options} */
                                        options: {
                                            remarkPlugins: [RemarkGFM],
                                            rehypePlugins: [require('./scripts/util/rehype-jsxprops')],
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    resolve: {
                        extensions: ['.js', '.ts', '.tsx', '.mdx'],
                        alias: resolveModuleAlias({
                            'src': 'src',
                            'runtime': 'runtime',
                            'react': `${process.env.REACT_RUNTIME || '.'}/node_modules/react`,
                            'react-dom': `${process.env.REACT_RUNTIME || '.'}/node_modules/react-dom`,
                            'jquery': 'node_modules/jquery',
                            'brew-js': '../brew-js/src',
                            'brew-js-react': '../brew-js-react/src',
                            'zeta-dom': '../zeta-dom/src',
                            'zeta-dom-react': '../zeta-dom-react/src',
                            'jq-scrollable': '../jquery-scrollable',
                            'waterpipe': '../waterpipe',
                            'waterpipe-parser': '../waterpipe-parser',
                            '@misonou/waterpipe-editor': '../waterpipe-editor/src',
                            '@misonou/react-app-utils': '../react-app-utils',
                            '@misonou/react-css-utils': '../react-css-utils',
                        })
                    }
                };
            }
        }
    };
};
