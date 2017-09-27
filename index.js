const express = require('express');
const compression = require('compression');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(compression());

app.get('/', function (request, response) {
  response.render('pages/index', {
    pkg: require('./package.json'),
    app: require('./app.json'),
    content: require('./views/data/content.json'),
    settings: {
      home: true
    }
  });
});

app.get("/profiles", function (request, response) {
  response.render('pages/profiles', {
    pkg: require('./package.json'),
    app: require('./app.json'),
    content: require('./views/data/content.json'),
    request: request.params
  });
});

app.get("/profile/:profile", function (request, response) {
  response.render('pages/profile', {
    pkg: require('./package.json'),
    app: require('./app.json'),
    content: require('./views/data/content.json'),
    request: request.params
  });
});

app.use(express.static(__dirname + '/static', {maxAge: 31557600000}));
app.use(function (req, res) {
  res.status(404).render('error/404', {
    pkg: require('./package.json'),
    app: require('./app.json'),
    content: require('./views/data/content.json')
  });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
