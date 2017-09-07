const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rutaData = require('./rutas/data');
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
app.set('views', './views');

var env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use('/data', rutaData);
app.listen(3000);