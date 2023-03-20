var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunksPlugin = require("extract-css-chunks-webpack-plugin"); // used for packaging css into bundles

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_paint.[contenthash].js'
    },
    devServer: {
        port: 3500,
        open: true,
        hot: true,
        static: path.join(__dirname, 'dist')
    },
    module : {
        rules: [
            {
                test: /\.css$/i,
                use: [
                  {
                    loader: ExtractCssChunksPlugin.loader,
                    options: {
                      hot: true,
                    },
                  },
                  'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new ExtractCssChunksPlugin({
            filename: "[name].[contentHash].css"
        }),
        new HtmlWebpackPlugin({
          title: 'Canvas Paint',
          filename: 'index.html',
          template: path.resolve(__dirname, "./src/index.html"),
          inject: 'body'
        })
    ],
}