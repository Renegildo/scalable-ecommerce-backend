import express from "express";
import { createProduct, getAllProducts, getProduct } from "../controllers/product";

const router = express.Router();

export default (): express.Router => {
  router.get("/products", getAllProducts);
  router.get("/product/:id", getProduct);
  router.post("/product", createProduct);

  return router;
};
