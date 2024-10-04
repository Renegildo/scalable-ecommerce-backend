import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import router from "./routes/user";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/users", router());

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
