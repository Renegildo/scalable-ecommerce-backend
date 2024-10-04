import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.USER_DB_CONNECTION_STRING
});

pool.query(`CREATE TABLE IF NOT EXISTS users (
  id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(500),
  email VARCHAR(500),
  password VARCHAR(500)
)`);

export default pool;
