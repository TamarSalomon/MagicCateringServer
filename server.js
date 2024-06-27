const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./src/routes/noteRoutes'); 
const orderRoutes = require('./src/routes/orderRoutes');
const serviceRoutes = require('./src/routes/serviceRoutes');
const userRoutes = require('./src/routes/userRoutes');
const businessRoutes=require('./src/routes/businessRoutes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

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
app.use('/notes', noteRoutes);
app.use('/orders', orderRoutes);
app.use('/services',serviceRoutes);
app.use('/users',userRoutes);
app.use('/business',businessRoutes)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});