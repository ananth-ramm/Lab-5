const express = require('express');
const app = express();

app.use(express.json());

app.use('/', express.static('public'));

const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

module.exports = app;
