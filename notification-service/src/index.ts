import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
