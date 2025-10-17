// server/src/models/InitialTest.js
import mongoose from "mongoose";

const initialTestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  score: Number,
  proficiency_level: { type: String, enum: ["Beginner","Intermediate","Advanced"] },
  is_test_taken: { type: Boolean, default: false },
  test_date: Date
}, { timestamps: true });

export default mongoose.model("InitialTest", initialTestSchema);
