import express from "express";
import dotenv from "dotenv";
import router from "./routes/orders";
dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(express.json());
app.use("/api/order", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
