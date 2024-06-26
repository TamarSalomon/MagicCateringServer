const express = require('express');
const bodyParser = require('body-parser');

const businessRoutes = require('../routes/businessRoutes');
const noteRoutes = require('../routes/noteRoutes');
const orderRoutes = require('../routes/orderRoutes');
const serviceRoutes=require('../routes/serviceRoutes')
const userRoutes=require('../routes/userRoutes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use('/business', businessRoutes);
app.use('/notes', noteRoutes);
app.use('/orders', orderRoutes);
app.use('/services',serviceRoutes);
app.use('/users',userRoutes);

module.exports = app;