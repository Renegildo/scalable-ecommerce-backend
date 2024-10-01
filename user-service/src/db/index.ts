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

pool.query(`CREATE TABLE IF NOT EXISTS users (
  id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(500),
  email VARCHAR(500),
  password VARCHAR(500)
)`);

export default pool;
