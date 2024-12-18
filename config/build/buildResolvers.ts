import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', "jsx"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        alias: {},
        mainFiles: ["index"],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    };
}