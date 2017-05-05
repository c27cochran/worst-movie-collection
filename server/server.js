const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const moviesRouter = require('./routes/moviesRouter');
const morgan = require('morgan');
const db = require('./db');

const port = 8081;

const http = require('http').Server(app);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/movies', moviesRouter);

const server = http.listen(port);
console.log(`Server is running on port: ${port}`);