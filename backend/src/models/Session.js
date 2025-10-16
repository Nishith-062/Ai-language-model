import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  messages: [
    {
      sender: { type: String, enum: ["user", "ai"] },
      text: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  feedback: {
    grammarScore: { type: Number, default: 0 },
    fluencyScore: { type: Number, default: 0 },
  },
});

export default mongoose.model("Session", sessionSchema);
