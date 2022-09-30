var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./src/routes/home.js');
var carritoRouter = require('./src/routes/carrito.js');
var detalleRouter = require('./src/routes/detalle.js');
var registerRouter = require('./src/routes/register.js');
var loginRouter = require('./src/routes/login.js');
var anadirRouter = require('./src/routes/anadirProducto.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/detalle', detalleRouter);
app.use('/carrito', carritoRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/anadir', anadirRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
