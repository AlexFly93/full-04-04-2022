const express = require('express');
const cors = require('cors')
const {errorValidateHanle, errorHandle} = require('./middlewares/error.handlers')
const router = require('./routes');
const app = express();

app.use(cors())
app.use(express.static('public'));
app.use(express.json()); //Content-Type: application/json
//http://localhost:3000/api
app.use('/products', router)
app.use('/api', router);

app.use(errorValidateHanle);

app.use(errorHandle);

module.exports = app;
