const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// sourcepam => grafo de dependencias/ Grafo: estructura de datos (ptos conectados. Tiene un pto origen)

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "our project",
            template: "index.html",
        }),
    ],
    resolve: { extensions: ['.ts', '.js'] },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 4500
    }
}