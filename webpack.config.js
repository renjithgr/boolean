const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
