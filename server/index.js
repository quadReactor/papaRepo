const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const router = require('./router/index.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(router);

app.listen(port, () => {
  console.log('Listening on port 3000!');
});
