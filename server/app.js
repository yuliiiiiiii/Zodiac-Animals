//declarations
require('dotenv').config()
const cors = require("cors");
const { ENVIRONMENT, PORT } = process.env

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//routes import
const animalsRoutes = require('./routes/animalsRoutes');

const app = express();

//middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

console.log("CORS ORIGIN:", process.env.ORIGIN);

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true,
  ContentType: "json",
};

//use middleware cors to fix cors issue
app.use(cors(corsOptions));

//localhost:8080
app.get('/', (req, res) => {
  res.json({greetings: 'hello world'});
})

//put this AFTER app.use(cors(corsOptions))!!
//link animalsRoutes, localhost:8080/animals
app.use('/animals', animalsRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

