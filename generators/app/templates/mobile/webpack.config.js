const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mainDirectory = './main.js';
const presets = ['react', 'es2015', 'stage-0', 'react-hmre'];
const entry = ['webpack-hot-middleware/client', mainDirectory];
const pxtorem = require('postcss-pxtorem');


module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: "inline-sourcemap",
    entry: entry,
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
                    path.resolve(__dirname, 'src/public/antd-icons')  // 业务代码本地私有 svg 存放目录
                ]
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|test)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: presets,
                        plugins: [
                            'react-html-attrs',
                            'transform-class-properties',
                            'transform-decorators-legacy',
                            ["import", {
                                libraryName: "antd-mobile",
                                style: true
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css?$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'raw-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:(loader) => [
                                pxtorem({                // 高清方案，将px转换为rem
                                    rootValue: 100,
                                    propWhiteList: [],
                                })
                            ]
                        }
                    },

                    'less-loader'
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:(loader) => [
                                pxtorem({                // 高清方案，将px转换为rem
                                    rootValue: 100,
                                    propWhiteList: [],
                                })
                            ]
                        }
                    },
                    'sass-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.(png|jpg|)$/,
                use: ['url-loader?limit=10000']
                //loader: 'url-loader?limit=250'
            }
        ]
    },
    resolve: {
        // mainFiles: ["index.web","index"],
        modules: ['node_modules', path.join(__dirname, './node_modules')],
        extensions: ['.web.jsx', '.web.js', '.ts', '.tsx',
            '.js',
            '.jsx'
        ],
        mainFields: [
            'browser',
            'jsnext:main',
            'main'
        ],
    },
    output: {
        path: path.join(__dirname, '/build/dist'),
        filename: "[name].min.js",
        chunkFilename: '[id]_[hash].chunk.min.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};