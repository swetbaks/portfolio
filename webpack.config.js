const path = require('path');
const webpack = require('webpack');
const banner = require('./banner.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode : 'development',
    entry : {
        main : '/src/app.js'
    },
    output : {
        publicPath : '',
        path : path.resolve('./dist'),
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.(png|jpg|gif)$/,
                loader : 'url-loader',
                options : {
                    name : '[name].[ext]?[hash]',
                    limit : 20000
                }
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin(banner),
        new webpack.DefinePlugin({}),
        new HtmlWebpackPlugin({
            minify : process.env.NODE_ENV === 'production' ? {
                collapseWhitespace : true,
                removeComments : true
            } : false,
            template : './src/index.html'
        }),
        new CleanWebpackPlugin(),
        ...(process.env.NODE_ENV === 'production' ?
        [new MiniCssExtractPlugin({filename : '[name].css'})] : [] )
    ]
}