import express from "express";
import pool from "../db";

export const createOrder = async (req: express.Request, res: express.Response) => {
  try {
    const { user_id, total_amount, status } = req.body;

    await pool.query(
      `INSERT INTO orders (user_id, total_amount, status)
      VALUES ($1, $2, $3)`,
      [user_id, total_amount, status]
    );

    res.status(200).json({msg: "Order created successfully."});
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getOrderById = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const order = await pool.query(
      `SELECT * FROM orders WHERE id=$1`,
      [id]
    );

    res.status(200).json(order.rows[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getOrderByUserId = async (req: express.Request, res: express.Response) => {
  try {
    const { user_id } = req.params;

    const orders = await pool.query(
      `SELECT * FROM orders WHERE user_id=$1`,
      [user_id]
    );

    res.status(200).json(orders.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
