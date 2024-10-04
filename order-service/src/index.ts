import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import router from "./routes/orders";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(express.json());
app.use("/api/order", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
