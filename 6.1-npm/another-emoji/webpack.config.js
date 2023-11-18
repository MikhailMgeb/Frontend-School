const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path'); // модуль для обработки путей к папкам

module.exports = {
    entry: './src/index.js', // точка входа
    output: {
        filename: 'bundle.js', // имя файла бандла
        path: path.resolve(__dirname, 'dist'), // папка для сборки
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "ie 9" }]
                        ]
                    }
                }

            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                loader: 'svgo-loader'
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};