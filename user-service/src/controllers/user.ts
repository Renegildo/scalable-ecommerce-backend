import express from "express";
import pool from "../db";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE name=$1 OR email=$2",
      [name, email]
    );

    if (existingUser.rows.length > 0) {
      res.status(400).json({ msg: "User already exists" });
      return;
    }

    await pool.query(
      `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)`,
      [name, email, password]
    );

    res.status(200).json({ msg: "User created successfully." });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  const user = await pool.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password]
  );

  if (user.rows.length < 1) {
    res.sendStatus(403);
    return;
  }

  res.status(200).json(user.rows[0]);
}
