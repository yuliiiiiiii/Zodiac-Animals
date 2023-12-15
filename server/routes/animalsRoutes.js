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

module.exports = router;