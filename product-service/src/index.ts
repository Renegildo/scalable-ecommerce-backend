import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import router from "./routes/product";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/products", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
