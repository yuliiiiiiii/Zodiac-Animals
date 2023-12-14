const router = require('express').Router();
const animals = require('../db/queries/animals');

router.get('/', (req, res) => {
  animals.getAllAnimals().then(data => {
    console.log(data);
    res.json({animals: data})
  })
});

module.exports = router;