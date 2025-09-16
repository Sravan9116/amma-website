const pool = require("../db");

const saveExperience = async (name, experience) => {
  const result = await pool.query(
    "INSERT INTO experiences(name, experience) VALUES($1, $2) RETURNING *",
    [name, experience]
  );
  return result.rows[0];
};

module.exports = { saveExperience };
