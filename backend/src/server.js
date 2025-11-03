import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectb } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import itemRoutes from "./routes/item.routes.js";
import "./config/passport.js";
import passport from "passport";

// configs
dotenv.config();
const PORT = process.env.PORT || 5000;
// create app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// test route
app.get("/", (req, res) => {
  res.send("🚀 AI Grocery Backend Running Smoothly");
});

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

// start server
app.listen(PORT, () => {
  connectb();
  console.log("Server started");
});
