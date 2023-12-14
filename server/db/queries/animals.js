const db = require('../../configs/db.config');

const getAllAnimals = () => {
  return db.query("SELECT * FROM animals").then(data => {
    return data.rows;
  })
}

module.exports = {getAllAnimals}