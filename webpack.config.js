const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container
const path = require("path")

const { dependencies } = require('./package.json')

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: { port: 3001, historyApiFallback: true },
  output: { publicPath: "auto" },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: { presets: ["@babel/preset-react"] }
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "platform",
      remotes: { plugins: "plugins@http://localhost:3002/remoteEntry.js" },
      shared: [{
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
        '@apollo/client': { singleton: true },
        graphql: {
          singleton: true,
          requiredVersion: dependencies.graphql
        },
      }]
    })
  ]
}
