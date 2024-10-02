import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
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
