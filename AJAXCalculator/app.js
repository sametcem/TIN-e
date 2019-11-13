/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var express = require('express');
var path = require('path');

var calcRouter = require('./routes/calc');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', calcRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;