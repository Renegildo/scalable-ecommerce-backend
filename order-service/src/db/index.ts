import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.ORDER_DB_CONNECTION_STRING
});

pool.query(`CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL UNIQUE PRIMARY KEY,
  order_id INTEGER,
  product_id INTEGER,
  quantity INTEGER
)`);

pool.query(`CREATE TABLE IF NOT EXISTS orders (
  id SERIAL UNIQUE PRIMARY KEY,
  user_id INTEGER,
  total_amount REAL,
  status VARCHAR(50)
)`);

export default pool;
