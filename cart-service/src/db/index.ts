import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.CART_DB_CONNECTION_STRING
});

pool.query(`CREATE TABLE IF NOT EXISTS cart_items (
  id SERIAL UNIQUE PRIMARY KEY,
  product_id INTEGER,
  user_id INTEGER,
  quantity INTEGER
)`);

export default pool;
