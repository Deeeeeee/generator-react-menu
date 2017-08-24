var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var proxy = require('http-proxy-middleware');

var port = 3001;
var app = express();
var compiler = webpack(config);
const proxyOpts = proxy('/api',{
    target: 'http://wthrcdn.etouch.cn',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/api': ''
    },
    router: {
        'http://wthrcdn.etouch.cn': 'http://localhost:3000'
    }
});
app.use(express.static(path.join(__dirname, 'src')));

app.use('/api', proxyOpts);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Webpack 🚧 development server listening on port %s', port);
    }
});