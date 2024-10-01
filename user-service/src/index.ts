import express from "express";
import dotenv from "dotenv";
import router from "./routes/user";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/users", router());

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
