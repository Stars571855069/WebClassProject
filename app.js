var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var RegisterRouter= require('./routes/Register');
var ItemBoughtRouter = require('./routes/ItemBought');
var ItemInfoRouter = require('./routes/ItemInfo');
var LoginRouter = require('./routes/Login');
var SearchRouter = require('./routes/Search');
var SopportUsRouter= require('./routes/SopportUs');
var ProfileRouter= require('./routes/Profile');
var SearchResultsRouter = require('./routes/SearchResults');
var ShopItemTypeRouter = require('./routes/ShopItemType');
var SearchUserRouter = require('./routes/SearchUser');
var CartRouter = require('./routes/Cart');
var UserPageRouter = require('./routes/UserPage');
var FindRouter = require('./routes/Find');
var layoutRouter = require('./routes/layout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//
app.use(session({
    secret: 'stars',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ItemBought', ItemBoughtRouter);
app.use('/ItemInfo', ItemInfoRouter);
app.use('/Login', LoginRouter);
app.use('/Register', RegisterRouter);
app.use('/Search', SearchRouter);
app.use('/SopportUs', SopportUsRouter);
app.use('/Profile', ProfileRouter);
app.use('/SearchResults',SearchResultsRouter);
app.use('/ShopItemType',ShopItemTypeRouter);
app.use('/SearchUser', SearchUserRouter);
app.use('/Cart', CartRouter);
app.use('/UserPage', UserPageRouter);
app.use('/Find', FindRouter);
app.use('layout', layoutRouter);

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
