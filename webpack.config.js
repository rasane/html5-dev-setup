const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports= {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
          ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        title: 'My App',
        template: 'src/assets/default.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/data", to: "data" },
        ],
      }),
    ],
    devServer: {
        magicHtml: true,
        hot: true,
        port: 'auto',
        server: {
            type: 'https',
            options: {
                key: './localhost.key',
                cert: './localhost.crt',
            },
        },
        static:{
            directory: path.join(__dirname, 'test/dist')
        }
    }
}