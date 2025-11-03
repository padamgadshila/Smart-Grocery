import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    category: { type: String },
    bought: { type: Boolean, default: false },
    reminderDate: { type: Date },
  },
  { timestamps: true }
);

export const Item = mongoose.model("Item", itemSchema);
