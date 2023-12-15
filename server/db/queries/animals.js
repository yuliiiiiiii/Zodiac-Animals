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

module.exports = { getAllAnimals }