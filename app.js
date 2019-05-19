var createError = require('http-errors'); // Crea de forma sencilla errores HTTP
var express = require('express');
var path = require('path'); //Proporciona utilidades para trabajar con las rutas de archivos y directorios
var cookieParser = require('cookie-parser'); //Analiza la cabecera cookies y guarda su contenido en req.cookies
var logger = require('morgan'); //HTTP request logger

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Definición del Template Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Comprobación del entorno activos
console.log(`Entorno: ${process.env.NODE_ENV}`);
if(process.env.ENVIRONMENT === 'dev'){
  app.use(logger('dev'));
}

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500); //Si no se usa esto, se manda un estado 200 en los headers del HTTP
  res.render('error'); //renderiza la página indicada
});

module.exports = app;
