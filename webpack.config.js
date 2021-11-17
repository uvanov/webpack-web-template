const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const source = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(source, 'js', 'index.js'),
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            filename: path.resolve(__dirname, 'index.html'),
            template: path.resolve(source, 'html', 'index.html'),
            minify: false
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },

    output: {
        filename: "app.bundle.js",
        path: path.resolve(dist, 'js'),
        clean: true
    },

    devServer: {
        open: true,
        static: './'
    }
}