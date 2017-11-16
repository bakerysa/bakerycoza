const express = require('express')
const app = express()

app.use(express.static(__dirname + '/app'));

app.all('/*', function(req, res, next) {
    res.sendFile('./app/index.html', { root: __dirname });
});
