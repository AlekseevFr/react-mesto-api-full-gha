const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { handleError } = require('./middlewares/handleError');
const { handleCross } = require('./middlewares/cross');

const router = require('./routes');

const app = express();

const { PORT = 3001, BASE_PATH } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
app.use(bodyParser.json());
app.use(requestLogger);
app.use(cors());
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(handleError);
app.use(handleCross);
