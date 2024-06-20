const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const authRout = require('./routes/auth');
const businessRoutes = require('./routes/businessRoutes');
const noteRoutes =require('./routes/noteRoutes');
const orderRoutes =require('./routes/orderRoutes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3001;

const mongoURI = 'mongodb://localhost:27017/YummyCatering';
mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

app.use(express.json());
// app.use('/auth', authRout);
app.use('/business', businessRoutes);
app.use('/notes', noteRoutes);
app.use('/orders', orderRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
