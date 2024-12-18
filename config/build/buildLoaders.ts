import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                targets: "defaults",
                presets: [
                    ['@babel/preset-env'],
                ],
                // plugins: []

            }
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        //обрабатывать файлы за рамками жаваскрипта
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}