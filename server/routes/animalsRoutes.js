const router = require('express').Router();
const animalsQueries = require('../db/queries/animals');

router.get('/', async (req, res) => {
  try{
    const animals = await animalsQueries.getAllAnimals();
    res.status(200).json(animals);
  } catch(e) {
    console.error("Error during fetching animals:", e);
    res.status(500).send("Server Error");
  }
  });

router.get('/ai', async (req, res) => {
  const animal_id = req.params.id;
  try{
    console.log("req.params.id:", animal_id)
    const stories = await animalsQueries.getStories(animal_id);
    res.status(200).json(stories);
  } catch(e) {
    console.error("Error during fetching stories:", e);
    res.status(500).send("Server Error");
  }
})

module.exports = router;