var path = require('path');
var ENV_PRO = process.env.NODE_ENV === "production";
var ENV_TEST = process.env.NODE_ENV === "test";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var mainDirectory = './main.js';
var presets = !ENV_PRO && !ENV_TEST ? ['react', 'es2015', 'stage-0', 'react-hmre'] : ['react', 'es2015', 'stage-0'];
var entry = !ENV_PRO && !ENV_TEST ? ['webpack-hot-middleware/client', mainDirectory] : [mainDirectory];

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: !ENV_PRO &&!ENV_TEST ? "inline-sourcemap" : false,
    entry: entry,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|test)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: presets,
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'antd']
                    }
                },

            },
            {
                test: /\.css?$/,
                use: ['style-loader','raw-loader','autoprefixer-loader']
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            },
            {
                test: /\.scss?$/,
                use: ['style-loader','css-loader','sass-loader','autoprefixer-loader']
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
        publicPath: !ENV_PRO && !ENV_TEST ? '/dist/' : '/muqian-client/dist/'
    },
    plugins: !ENV_PRO && !ENV_TEST ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ] : [
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
            template: !ENV_PRO ? path.join(__dirname, 'index-template-test.html') : path.join(__dirname, 'index-template-pro.html'),
            favicon: path.join(__dirname, '/src/public/favicon.ico')
        })
    ]
};