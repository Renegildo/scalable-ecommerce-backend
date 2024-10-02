import express from "express";
import pool from "../db";

export const createCartItem = async (req: express.Request, res: express.Response) => {
  try {
    const { product_id, user_id, quantity } = req.body;

    await pool.query(
      `INSERT INTO cart_items (product_id, user_id, quantity)
      VALUES ($1, $2, $3)`,
      [product_id, user_id, quantity]
    );

    res.status(200).json({msg: "Card item created successfully."})
  } catch (error) {
    console.log(error);
    res.sendStatus(400);  
  }
};

export const getCartItemsByUserId = async(req: express.Request, res: express.Response) => {
  try {
    const { user_id } = req.params;

    const result = await pool.query(
      `SELECT * FROM cart_items WHERE user_id=$1`,
      [user_id]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
