import Session from "../models/Session.js";
import axios from "axios";

const PYTHON_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:8000";

export const sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });

    const pythonResponse = await axios.post(`${PYTHON_URL}/chat`, { user_message: message });
    const aiResponse = pythonResponse.data.reply;

    let session = await Session.findOne({ userId }).sort({ _id: -1 });
    if (!session) session = new Session({ userId, messages: [] });

    session.messages.push({ sender: "user", text: message });
    session.messages.push({ sender: "ai", text: aiResponse });
    await session.save();

    res.status(200).json({ reply: aiResponse });
  } catch (err) {
    console.error("Chat Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const sessions = await Session.find({ userId });
    res.json(sessions);
  } catch (err) {
    console.error("History Error:", err.message);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};
