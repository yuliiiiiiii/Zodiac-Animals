const db = require('../../configs/db.config');

const getAllAnimals = async () => {
  try {
    const result = await db.query("SELECT * FROM animals");
    console.log("animals:", result.rows)
    return result.rows
  } catch (e) {
    console.error("Error during getting all animals data:", e);
    throw e;
  }
};

const getStories = async (animalId) => {
  try{
    const result = await db.query(`SELECT * FROM stories WHERE animal_id = ${animalId}`);
    console.log("stories:", result.rows)
    return result.rows

  } catch (e) {
    console.error("Error during getting stories:", e);
    throw e;
  }
}

module.exports = { getAllAnimals, getStories }