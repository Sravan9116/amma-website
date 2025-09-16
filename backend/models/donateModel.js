const pool = require("../db");

const saveDonation = async (name, amount) => {
  const result = await pool.query(
    "INSERT INTO donations(name, amount) VALUES($1, $2) RETURNING *",
    [name, amount]
  );
  return result.rows[0];
};

module.exports = { saveDonation };
