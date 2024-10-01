import express from "express";
import { login, register } from "../controllers/user";

const router = express.Router();

export default (): express.Router => {
  router.post("/register", register);
  router.post("/login", login);

  return router;
};
