import express from "express";
import router from "./routes/cart";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(express.json());
app.use("/api/cart", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
