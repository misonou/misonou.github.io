const { RuntimeGlobals, Template } = require("webpack");
const JsonpChunkLoadingRuntimeModule = require("webpack/lib/web/JsonpChunkLoadingRuntimeModule");

const PLUGIN_NAME = "ChunkTeardownRuntimePlugin";

class ChunkTeardownRuntimePlugin {
    /**
     * @param {import("webpack").Compiler} compiler
     */
    apply(compiler) {
        compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
            const globalChunkLoading = compilation.outputOptions.chunkLoading;
            const onceForChunkSet = new WeakSet();
            /**
             * @param {Chunk} chunk chunk
             * @returns {boolean} true, if wasm loading is enabled for the chunk
             */
            const isEnabledForChunk = chunk => {
                const options = chunk.getEntryOptions();
                const chunkLoading =
                    options && options.chunkLoading !== undefined
                        ? options.chunkLoading
                        : globalChunkLoading;
                return chunkLoading === "jsonp";
            };
            compilation.hooks.runtimeRequirementInTree.for(RuntimeGlobals.ensureChunkHandlers).tap(PLUGIN_NAME, (chunk, set) => {
                if (onceForChunkSet.has(chunk)) return;
                onceForChunkSet.add(chunk);
                if (!isEnabledForChunk(chunk)) return;
                set.add(RuntimeGlobals.moduleCache);
            });
            compilation.hooks.runtimeModule.tap(PLUGIN_NAME, (module, chunk) => {
                if (module instanceof JsonpChunkLoadingRuntimeModule) {
                    const generate = module.generate;
                    module.generate = function () {
                        let result = generate.apply(this, arguments);
                        if (module._runtimeRequirements.has(RuntimeGlobals.hmrDownloadUpdateHandlers)) {
                            result += Template.asString([
                                "",
                                "chunkLoadingGlobal.remove = function () {};"
                            ]);
                        } else {
                            result += Template.asString([
                                "",
                                "chunkLoadingGlobal.remove = function (moduleId) {",
                                Template.indent([
                                    "var i = chunkLoadingGlobal.findIndex(function (v) {",
                                    Template.indent([
                                        `return ${RuntimeGlobals.hasOwnProperty}(v[1], moduleId);`
                                    ]),
                                    "});",
                                    "if (i >= 0) {",
                                    Template.indent([
                                        "for (var j in chunkLoadingGlobal[i][0]) {",
                                        Template.indent([
                                            `if (!${RuntimeGlobals.hasOwnProperty}(installedChunks, chunkLoadingGlobal[i][0][j]) || installedChunks[chunkLoadingGlobal[i][0][j]] !== 0) {`,
                                            Template.indent(["return;"]),
                                            "}",
                                        ]),
                                        "}",
                                        "for (var j in chunkLoadingGlobal[i][0]) {",
                                        Template.indent([
                                            "delete installedChunks[chunkLoadingGlobal[i][0][j]];"
                                        ]),
                                        "}",
                                        "for (var j in chunkLoadingGlobal[i][1]) {",
                                        Template.indent([
                                            `delete ${RuntimeGlobals.moduleFactories}[j];`,
                                            `delete ${RuntimeGlobals.moduleCache}[j];`
                                        ]),
                                        "}",
                                        "chunkLoadingGlobal.splice(i, 1);",
                                    ]),
                                    "}",
                                ]),
                                "};",
                            ]);
                        }
                        return result;
                    };
                }
            });
        });
    }
}

module.exports = ChunkTeardownRuntimePlugin;
