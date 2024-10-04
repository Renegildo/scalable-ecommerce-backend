import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import router from "./routes/payment";

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const app = express();

app.use(express.json());
app.use("/api/payment/", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
