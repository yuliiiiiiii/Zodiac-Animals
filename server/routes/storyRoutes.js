const router = require('express').Router();
const animalsQueries = require('../db/queries/animals');
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

router.post('/', (req, res) => {
  const animal_id = Number(req.body.id)
  // console.log("animal_id:", animal_id)
  
  //need to get animal eng first
  const animalName = animalsQueries.getAnimalName(animal_id)


  .then(data => {
    const newStory = animalsQueries.createStories(animal_id, data)
    .then(() => {
      res.status(200).json(newStory)
    })
  })
  .catch(err => {
    res.status(500).send("Server can't create stories", err);
  })
})

module.exports = router;