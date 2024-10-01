import express from "express";
import dotenv from "dotenv";
import router from "./routes/product";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/products", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
