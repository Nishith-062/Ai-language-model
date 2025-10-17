// server/src/models/UserLesson.js
import mongoose from "mongoose";

const userLessonSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  progress: { type: Number, default: 0 }, // 0-100
  completed: { type: Boolean, default: false },
  completion_date: Date
}, { timestamps: true });

export default mongoose.model("UserLesson", userLessonSchema);
