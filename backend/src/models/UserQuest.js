// server/src/models/UserQuest.js
import mongoose from "mongoose";

const userQuestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quest_id: { type: mongoose.Schema.Types.ObjectId, ref: "DailyQuest" },
  status: { type: String, enum: ["pending","completed"], default: "pending" },
  completion_date: Date
}, { timestamps: true });

export default mongoose.model("UserQuest", userQuestSchema);
