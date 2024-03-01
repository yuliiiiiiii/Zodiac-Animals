const router = require('express').Router();
const animalsQueries = require('../db/queries/animals');

router.post('/', (req, res) => {
  const animal_id = Number(req.body.id)
  // console.log("animal_id:", animal_id)
  // make API call here
  
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