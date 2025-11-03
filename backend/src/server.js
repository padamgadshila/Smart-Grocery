import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectb } from "./config/db.js";

// configs
dotenv.config();
const PORT = process.env.PORT || 5000;
// create app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("🚀 AI Grocery Backend Running Smoothly");
});

// start server
app.listen(PORT, () => {
  connectb();
  console.log("Server started");
});
