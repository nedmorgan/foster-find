// Requiring NPM packages
const express = require('express')
const app = express()
const logger = require('morgan')
const methodOverride = require('method-override')
const routes = require('./routes/index.js')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Register middleware
require('./config/passport')(passport);

app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Flas Middleware
app.use(flash());

// Global variables flash messages
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Method override Middleware
app.use(methodOverride('_method'))

app.use(logger('dev'))

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`)
})