import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import route from "./Routes/Routes.js";
import Connection from "./Database/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/", route);

Connection();

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
