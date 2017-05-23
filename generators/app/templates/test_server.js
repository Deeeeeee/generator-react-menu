var path = require('path');
var express = require('express');

var port = 3001;
var app = express();

app.use(express.static(path.join(__dirname, './')));
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

/*
* node_modules/react-loaders/dist/react-loaders.js
* node_modules/loaders.css/src/animations/line-spin-fade-loader.scss
* node_modules/qrcode-react/lib/login.js
* */