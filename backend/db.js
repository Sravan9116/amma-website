const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",      // change to your PostgreSQL username
  host: "localhost",
  database: "amma_website",
  password: "your_password", // change to your PostgreSQL password
  port: 5432,
});

module.exports = pool;
