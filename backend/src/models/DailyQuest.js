// server/src/models/DailyQuest.js
import mongoose from "mongoose";

const dailyQuestSchema = new mongoose.Schema({
  description: String,
  exp_points: { type: Number, default: 10 },
  reset_daily: { type: Boolean, default: true },
  lang_id: { type: mongoose.Schema.Types.ObjectId, ref: "Language" }
}, { timestamps: true });

export default mongoose.model("DailyQuest", dailyQuestSchema);
