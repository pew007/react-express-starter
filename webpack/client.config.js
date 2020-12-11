const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appRootPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(__dirname, '..', 'public');
const clientPath = path.resolve(__dirname, '..', 'client');

module.exports = {
    entry: appRootPath + '/client/index.js',
    output: {
        path: assetsPath,
        filename: "bundle.js",
        publicPath: "/public/",
        crossOriginLoading: "anonymous",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: clientPath,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appRootPath + "/client/index.html"
        })
    ]
};
