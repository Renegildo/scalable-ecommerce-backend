import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.PAYMENT_DB_CONNECTION_STRING
});

pool.query(`CREATE TABLE IF NOT EXISTS payment (
  id SERIAL UNIQUE PRIMARY KEY,
  order_id INTEGER,
  amount REAL,
  status VARCHAR(50),
  payment_method VARCHAR(50)
)`);

export default pool;
