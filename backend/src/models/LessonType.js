// server/src/models/LessonType.js
import mongoose from "mongoose";

const lessonTypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true },
  exp_points: { type: Number, default: 100 }
});

export default mongoose.model("LessonType", lessonTypeSchema);
