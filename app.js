var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');
var myRoute = require('./route');
var myUtil = require('./common/utils');


var app = express();

// view engine setup
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html'); // 能够解析html

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(multer({dest: path.join(__dirname, 'public/upload')})); // 指定文件上传路径
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 60000 * 30 },  //设置maxAge是60000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true
     }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    var path = req.url;

    if (path == '/admin/dologin') {
        next();
    }

    if (path.indexOf('admin') != -1) {
         if (path == '/admin/' || path == '/admin') {
             res.render(myUtil.getView('login'),{errinfo : ''});
         } else {
             if (req.session.user) {
                   next();
             } else {
                 res.render(myUtil.getView('login'),{errinfo : ''});
             }
         }
    } else {
        next();
    }
});

// 统一放到路由文件中
myRoute.route(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
