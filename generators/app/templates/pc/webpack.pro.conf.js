var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var mainDirectory = './main.js';
var presets = ['react', 'es2015', 'stage-0'];
var entry = [mainDirectory];

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: false,
    entry: entry,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|test)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: presets,
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'antd']
                    }
                },

            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'raw-loader', 'autoprefixer-loader']
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'less-loader'
                ]
            },
            {
                test: /\.scss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader']
            },
            {
                test: /\.(png|jpg|)$/,
                use: ['url-loader?limit=10000']
                //loader: 'url-loader?limit=250'
            }
        ]
    },
    output: {
        path: path.join(__dirname, '/build/dist'),
        filename: "[name].min.js",
        chunkFilename: '[id]_[hash].chunk.min.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.join(__dirname, 'index-template-pro.html'),
            favicon: path.join(__dirname, '/src/public/favicon.ico')
        }),
        new CleanWebpackPlugin(
            ['build/*',],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
};