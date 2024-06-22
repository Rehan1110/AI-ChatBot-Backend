import express from "express";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server Open");
});