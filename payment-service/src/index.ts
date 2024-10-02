import express from "express";
import dotenv from "dotenv";
import router from "./routes/payment";
dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const app = express();

app.use(express.json());
app.use("/api/payment/", router());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
