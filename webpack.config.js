const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        hotOnly: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};