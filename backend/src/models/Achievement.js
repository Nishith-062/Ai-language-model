// server/src/models/Achievement.js
import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  name: String,
  description: String,
  criteria: String, // short criteria description or JSON string
  exp_points: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Achievement", achievementSchema);
