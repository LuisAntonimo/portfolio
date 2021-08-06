const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src'))
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.listen(port);
// console.log('Server started at http://localhost:' + port);

console.log('Running server... ✅')