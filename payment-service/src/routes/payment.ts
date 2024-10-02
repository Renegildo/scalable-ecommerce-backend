import express from "express";
import { createPayment, getPayment } from "../controllers/payment";

const router = express.Router();

export default (): express.Router => {
  router.post("/payment", createPayment);
  router.get("/payment/:id", getPayment);

  return router;
};
