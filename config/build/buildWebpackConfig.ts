import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        //главный файл
        entry: {
            main: paths.entry
        },
        module: {
            rules: buildLoaders(options)
        },
        //сокращение для импортов
        resolve: buildResolvers(options),
        //адрес билда
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        //плагин для хтмл + прогресс бар сборки
        plugins: buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined

    }
}