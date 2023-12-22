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
  // need to get all stories where animal_id = req.body
})

module.exports = router;