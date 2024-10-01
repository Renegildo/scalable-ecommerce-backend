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

pool.query(`CREATE TABLE IF NOT EXISTS products (
  id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(500),
  price REAL,
  description VARCHAR(500),
  category VARCHAR(500),
  stock INTEGER
)`);

export default pool;
