const fs = require('fs');
const path = require('path');

function resolveModulePath(...paths) {
    for (let v of paths) {
        v = path.resolve(v);
        if (fs.existsSync(v)) {
            return v;
        }
    }
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
                return {
                    ...config,
                    devtool: env === 'production' ? false : 'inline-source-map',
                    module: {
                        ...config.module,
                        rules: [
                            ...(config.module.rules || []),
                            {
                                test: /\.tsx?$/,
                                exclude: /node_modules/,
                                loader: 'ts-loader',
                                options: {
                                    compilerOptions: {
                                        "noEmit": false
                                    }
                                }
                            },
                            {
                                test: /\.mdx?$/,
                                loader: '@mdx-js/loader',
                                type: 'javascript/auto',
                                /** @type {import('@mdx-js/loader').Options} */
                                options: {
                                    remarkPlugins: [RemarkGFM]
                                }
                            }
                        ]
                    },
                    resolve: {
                        extensions: ['.js', '.ts', '.tsx', '.mdx'],
                        alias: {
                            'src': path.resolve('src'),
                            'react': path.resolve('node_modules/react'),
                            'react-dom': path.resolve('node_modules/react-dom'),
                            'jquery': path.resolve('node_modules/jquery'),
                            'brew-js': resolveModulePath('../brew-js/src', 'node_modules/brew-js'),
                            'brew-js-react': resolveModulePath('../brew-js-react/src', 'node_modules/brew-js-react'),
                            'zeta-dom': resolveModulePath('../zeta-dom/src', 'node_modules/zeta-dom'),
                            'zeta-dom-react': resolveModulePath('../zeta-dom-react/src', 'node_modules/zeta-dom-react'),
                            'jq-scrollable': resolveModulePath('../jquery-scrollable', 'node_modules/jq-scrollable'),
                            'waterpipe': resolveModulePath('../waterpipe', 'node_modules/waterpipe'),
                            '@misonou/react-app-utils': resolveModulePath('../react-app-utils', 'node_modules/@misonou/react-app-utils'),
                            '@misonou/react-css-utils': resolveModulePath('../react-css-utils', 'node_modules/@misonou/react-css-utils'),
                        }
                    }
                };
            }
        }
    };
};
