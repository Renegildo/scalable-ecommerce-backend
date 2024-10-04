import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.PRODUCT_DB_CONNECTION_STRING
});

pool.query(`CREATE TABLE IF NOT EXISTS products (
  id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(500),
  price REAL,
  description VARCHAR(500),
  category VARCHAR(500),
  stock INTEGER
)`);

export default pool;
