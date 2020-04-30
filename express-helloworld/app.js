const usrs = require('./json/usuarios.json');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send(usrs);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

