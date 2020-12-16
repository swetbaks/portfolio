const path = require('path');
const webpack = require('webpack');
const banner = require('./banner.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode : 'production',
    entry : {
        main : '/src/main.js'
    },
    output : {
        publicPath : '',
        path : path.resolve('./dist'),
        filename : '[name].js'
    },
    devServer : {
        overlay : true,
        historyApiFallback: true
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
          }),
        ],
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
                test : /\.svg$/,
                loader : 'svg-url-loader',
                options : {
                    encoding : 'base64'
                }
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: ['file-loader']
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'url-loader',
                options : {
                    name : '[name].[ext]?[hash]',
                    limit : 20000
                }
            },
            {
                test : /\/js$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
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
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        ...(process.env.NODE_ENV === 'production' ?
        [new MiniCssExtractPlugin({filename : '[name].css'})] : [] )
    ]
}