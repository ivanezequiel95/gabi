const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rutaData = require('./rutas/data');
const nunjucks = require('nunjucks');
const cors = require('cors');
const compression = require('compression');

const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'html');
app.set('views', './views');

var env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

MongoClient.connect('mongodb://localhost:27017/midb', function(err, database) {
  if (err) {
    throw err;
  }

  app.use(function (req, res, next) {
    req.db = database;
    next();
  });
  app.use(bodyParser.urlencoded({extended : false}));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static("./public"));
  app.use(compression());
  app.use('/data', rutaData);
  app.listen(3000);

});
