const webpack = require("webpack");
const path = require("path");

module.exports = ({ config, mode }) => {
  // Typescript
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  // Fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "[name].[ext]"
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });

  config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: mode === "DEVELOPMENT"
    })
  );
  return config;
};
