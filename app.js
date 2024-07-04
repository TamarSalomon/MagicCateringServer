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


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Magic Catering API',
      version: '1.0.0',
      description: 'API documentation for Magic Catering project',
      contact: {
        name: 'Tamar',
        email: 'tamar31780@gmail.com'
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Local server'
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./routes/*.js', './controllers/*.js'],
};
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



