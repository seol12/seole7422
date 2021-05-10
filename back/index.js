const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const hpp = require('hpp');
const helmet = require('helmet');
const passport = require('passport');
const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');



const prod = process.env.NODE_ENV === 'production';
dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

if(prod){
  app.use(hpp());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(cors({
    origin: ['http://seolecat.com','http://www.seolecat.com'],
    credentials: true,
  }))
}else{
  app.use(morgan('dev'));
  app.use(cors({
    origin: true,
    credentials: true,
  }));

}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false, 
    domain: prod && '.seolecat.com',
  },
  name: 'didhddl',
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(prod ? process.env.PORT : 3065, () => {
  console.log(`server is running on http://localhost:3065${process.env.PORT}`);
});