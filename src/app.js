const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const JWT = require('express-jwt')
require('custom-env').env()

const Routes = require('./routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(JWT({
      secret: process.env.JWT_SECRET,
      algorithms: ['HS256'],
    }
))

app.use('/atama', Routes.atama);
app.use('/oncelik', Routes.oncelik);
app.use('/durum', Routes.durum);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(req.originalUrl)
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
