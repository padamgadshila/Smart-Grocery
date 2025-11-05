import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  addItem,
  deleteItem,
  getItems,
  updateItem,
} from "../controllers/item.controller.js";

const router = express.Router();

router.post("/add", verifyToken, addItem);
router.get("/", verifyToken, getItems);
router.put("/:id", verifyToken, updateItem);
router.delete("/:id", verifyToken, deleteItem);

export default router;
