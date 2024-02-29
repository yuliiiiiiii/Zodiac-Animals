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

router.get('/ai/:id', async (req, res) => {
  const animal_id = Number(req.params.id);
  try{
    console.log("animal_id:", animal_id)
    const storiesWithNam = await animalsQueries.getStoriesAndNam(animal_id);
    res.status(200).json(storiesWithNam);
  } catch(e) {
    console.log("Type of animal_id:", typeof animal_id)
    console.error("Error during fetching stories:", e);
    res.status(500).send("Server can't get the stories");
  }
})

router.post('/create', async(req, res) => {
  const animal_id = Number(req.body.id)
  // console.log("animal_id:", animal_id)
  try{
    const newStory = await animalsQueries.createStories(animal_id)
    res.status(200).json(newStory)
  } catch(e) {
    res.status(500).send("Server can't create stories");
  }
})

module.exports = router;