const { Router } = require('express');
const path = require('path');

const routes = Router();

routes.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/index.html'));
});

module.exports = routes;