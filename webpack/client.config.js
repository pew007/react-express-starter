const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appRootPath = path.resolve(__dirname, '..');

module.exports = {
    entry: appRootPath + '/client/index.js',
    output: {
        path: path.join(appRootPath, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appRootPath + "/client/index.html"
        })
    ]
};
