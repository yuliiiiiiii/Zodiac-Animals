//declarations
require('dotenv').config()
const {ENVIRONMENT, PORT} = process.env
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//routes import
const animalsRoutes = require('./routes/animalsRoutes');

const app = express();

//middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

//link animalsRoutes, localhost:8080/animals
app.use('/animals', animalsRoutes);

//localhost:8080
app.get('/', (req, res) => {
  res.json({greetings: 'hello world'});
})




app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

