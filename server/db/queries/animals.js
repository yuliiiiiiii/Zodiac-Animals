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

const getStoriesAndNam = async (animalId) => {
  try{
    const result = await db.query(`SELECT eng, story FROM animals JOIN stories ON animals.id = stories.animal_id WHERE stories.animal_id = ${animalId}`);
    console.log("stories:", result)
    return result.rows

  } catch (e) {
    console.error("Error during getting stories:", e);
    throw e;
  }
}

const createStories = async(animalId, data) => {
  try{
    const result = await db.query("INSERT INTO stories (animal_id, story) VALUES($1, $2) RETURNING *", [animalId, data]);
    console.log("result", result)
    return result.rows[0].story;
  } catch (e) {
    console.error("Error during creating stories:", e);
    throw e;
  }
}

module.exports = { getAllAnimals, getStoriesAndNam, createStories }