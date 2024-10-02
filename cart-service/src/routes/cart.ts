import express from "express";
import { createCartItem, getCartItemsByUserId } from "../controllers/cart";

const router = express.Router();

export default (): express.Router => {
  router.post("/cart_item", createCartItem);
  router.get("/cart/:user_id", getCartItemsByUserId);

  return router;
}
