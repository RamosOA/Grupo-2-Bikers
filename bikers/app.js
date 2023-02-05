var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookies = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session')
const userLoggedMiddleware = require('./src/middleware/userLoggedMiddleware')

var mainRouter = require('./src/routes/main.js');
var productsRouter = require('./src/routes/productos.js');
var apisRoutesProducts = require('./src/routes/APIs/productosRoutes')
var apisRoutesUsers = require('./src/routes/APIs/userRoutes')
var cors = require('cors')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}))
app.use(cookies());
app.use(userLoggedMiddleware)
app.use(cors())

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/apis', apisRoutesProducts);
app.use('/apis', apisRoutesUsers);

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
