const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports= {
    mode: 'development',
    entry: './test/main.spec.ts',
    devtool: 'inline-source-map',
    output:{
        filename: 'testBundle.js',
        path: path.resolve(__dirname, 'test/dist')
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
      new NodePolyfillPlugin(),
      new MiniCssExtractPlugin(),
      /*new HtmlWebpackPlugin({
        filename:'test.html',
        title: 'Mocha Tests',
        template: 'test/test.html'
      })*/
    ],
    // devServer: {
    //     magicHtml: true,
    //     hot: true,
    //     port: 'auto',
    //     server: {
    //         type: 'https',
    //         options: {
    //             key: './localhost.key',
    //             cert: './localhost.crt',
    //         },
    //     },
    //     static:{
    //         directory: path.join(__dirname, 'test/dist')
    //     }
    // }
}