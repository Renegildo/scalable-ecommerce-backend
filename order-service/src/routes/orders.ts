import express from "express";
import { createOrder, getOrderById, getOrderByUserId } from "../controllers/orders";

const router = express.Router();

export default (): express.Router => {
  router.post("/order", createOrder);
  router.get("/order/:id", getOrderById);
  router.get("/order/user/:user_id", getOrderByUserId);

  return router;
};
