const router = require('express').Router();

router.get('/', (req, res) => {
  const animalsGreet = 'This is all the animals';
  res.json(animalsGreet);
});

module.exports = router;