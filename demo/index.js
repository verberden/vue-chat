const express = require('express');
const path = require('path');

const container = {};

container.env = process.env.NODE_ENV || 'development';

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index/index', {
      title: 'Chat',
    });
});

function handleErrors(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ status: false, message: (err.message || 'Сервер недоступен.') });
}

app.use((req, res, next) => {
  const err = new Error('Нет такого маршрута');
  err.status = 404;
  next(err);
});

app.use(handleErrors);

module.exports = app;