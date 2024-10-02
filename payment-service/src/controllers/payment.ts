import express from "express";
import pool from "../db";

export const createPayment = async (req: express.Request, res: express.Response) => {
  try {
    const { order_id, amount, status, payment_method } = req.body;

    await pool.query(
      `INSERT INTO payment (order_id, amount, status, payment_method)
      VALUES ($1, $2, $3, $4)`,
      [order_id, amount, status, payment_method]
    );

    res.status(200).json({msg: "Payment created successfully."});
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getPayment = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const payment = await pool.query(
      `SELECT * FROM payment WHERE id=$1`,
      [id]
    );

    res.status(200).json(payment.rows[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
