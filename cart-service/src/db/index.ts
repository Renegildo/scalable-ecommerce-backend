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

pool.query(`CREATE TABLE IF NOT EXISTS cart_items (
  id SERIAL UNIQUE PRIMARY KEY,
  product_id INTEGER,
  user_id INTEGER,
  quantity INTEGER
)`);

export default pool;
