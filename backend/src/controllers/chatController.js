import axios from "axios";
import ChatbotData from "../models/ChatbotData.js";
import FormData from "form-data";

const PYTHON_URL = 'http://127.0.0.1:8000' || "http://localhost:8000";

export const sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });

    const formData = new FormData();
    formData.append("text", message); 

    // Send form-data request
    const pythonResponse = await axios.post(`${PYTHON_URL}/chat/`, formData, {
      headers: formData.getHeaders(), // Important for multipart boundary
    });
    const aiResponse = pythonResponse.data;

    // Save session to DB
    const chatEntry = new ChatbotData({
      userId,
      userMessage: message,
      aiResponse: aiResponse.corrected_text || aiResponse.response_text || aiResponse.transcription || "",
    });
    await chatEntry.save();



    res.status(200).json(aiResponse );
  } catch (err) {
    console.log(err);
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
