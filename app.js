const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();

const session = require('./middleware/createSession');
const isUser = require('./middleware/isUser');
const indexRouter = require('./routes/index');
const watchaRouter = require('./routes/watcha')
const top25MoviesRouter = require('./routes/top25');
const searchRouter = require('./routes/search');

// const singleMentorRouter = require('./routes/singleMentor.js');

// const renderMentors = require('./routes/index');
const authRouter = require('./routes/auth.js');
const profileRouter = require('./routes/profile.js');
// const tagRouter = require('./routes/tag.js');
// const signoutRouter = require('./routes/signout.js');
const dbConnect = require('./db/connect');

dbConnect();
const app = express();
const PORT = process.env.PORT ?? 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session);
app.use(isUser);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/watcha', watchaRouter);
app.use('/mostPopular', top25MoviesRouter);
app.use('/search', searchRouter);
// app.use('/signout', signoutRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
