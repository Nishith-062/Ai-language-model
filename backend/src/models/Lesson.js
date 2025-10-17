import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: String,
  type_id: { type: mongoose.Schema.Types.ObjectId, ref: "LessonType" },
  difficulty: String,
  content: String,
  lang_id: { type: mongoose.Schema.Types.ObjectId, ref: "Language" }
}, { timestamps: true });

export default mongoose.model("Lesson", lessonSchema);
