// server/src/models/Pronunciation.js
import mongoose from "mongoose";

const pronunciationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  score: { type: Number, default: 0 }, // 0-100
  feedback: String
}, { timestamps: true });

export default mongoose.model("Pronunciation", pronunciationSchema);
