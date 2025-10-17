import mongoose from "mongoose";

const chatbotDataSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  input_text: String,
  response_text: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("ChatbotData", chatbotDataSchema);
