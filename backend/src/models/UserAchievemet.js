// server/src/models/UserAchievement.js
import mongoose from "mongoose";

const userAchievementSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  achievement_id: { type: mongoose.Schema.Types.ObjectId, ref: "Achievement" },
  awarded_date: { type: Date, default: Date.now }
});

export default mongoose.model("UserAchievement", userAchievementSchema);
