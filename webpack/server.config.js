const path = require('path');

const appRootPath = path.resolve(__dirname, '..');

module.exports = {
    mode: 'production',
    entry: appRootPath + '/server/app.js',
    output: {
        path: appRootPath,
        filename: "server.js"
    },
    target: 'node',
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
    }
};
