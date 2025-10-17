import Session from "../models/Session.js";
import axios from "axios";
import FormData from "form-data";

const PYTHON_URL = 'http://127.0.0.1:8000' || "http://localhost:8000";

export const sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });

    const formData = new FormData();
    formData.append("text", message); 
    // console.log("Sending message to Python service:", message);
    // console.log("Using PYTHON_URL:", formData);

    // Send form-data request
    const pythonResponse = await axios.post(`${PYTHON_URL}/chat/`, formData, {
      headers: formData.getHeaders(), // Important for multipart boundary
    });
    const aiResponse = pythonResponse.data;


    // let session = await Session.findOne({ userId }).sort({ _id: -1 });
    // if (!session) session = new Session({ userId, messages: [] });

    // session.messages.push({ sender: "user", text: message });
    // session.messages.push({ sender: "ai", text: aiResponse });
    // await session.save();

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
