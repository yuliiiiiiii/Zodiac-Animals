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
  const animalName = animalsQueries.getAnimalName(animal_id)

  .then(() => {
    const params = {
      prompt: `Can you create a story about ${animalName} in two sentences?`,
      model: "gpt-3.5-turbo",
      max_tokens: 10,
      temperature: 0,
    };
    
    client
        .post("https://api.openai.com/v1/completions", params)
        .then(result => {
          console.log("result:",result.data.choices[0].text);
          const data = result.data.choices[0].text
          const newStory = animalsQueries.createStories(animal_id, data)
          .then(() => {
            res.status(200).json(newStory)
          })
        })
  })
  .catch(err => {
    res.status(500).send("Server can't create stories", err);
  })
})

module.exports = router;