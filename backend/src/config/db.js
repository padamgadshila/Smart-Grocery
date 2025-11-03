import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connect to the database");
  } catch (error) {
    console.error("connection to the databse failed", error.message);
    process.exit(1);
  }
};
