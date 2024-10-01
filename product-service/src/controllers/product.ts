import express from "express";
import pool from "../db";

export const createProduct = async (req: express.Request, res: express.Response) => {
  try {
    const { name, price, description, category, stock } = req.body;

    await pool.query(
      `INSERT INTO products (name, price, description, category, stock)
      VALUES ($1, $2, $3, $4, $5)`,
      [name, price, description, category, stock]
    );

    res.status(200).json({ msg: "Product created successfully." });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getAllProducts = async (req: express.Request, res: express.Response) => {
  try {
    const products = await pool.query("SELECT * FROM products");

    res.status(200).json(products.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const getProduct = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const product = await pool.query("SELECT * FROM products WHERE id=$1", [id]);

    res.status(200).json(product.rows[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
