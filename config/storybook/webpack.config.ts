import path from "path";
import { BuildPaths } from "../build/types/config";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({config}: {config: webpack.Configuration}) => {

  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "../../src")
  }
  //absolute path
  config.resolve.modules.push(paths.src),
  config.resolve.extensions.push(".ts", ".tsx");

  //css modules + scss
  config.module.rules.push(buildCssLoader(true));

  //svg
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i}
    }

    return rule; 
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
} 