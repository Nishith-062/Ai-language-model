import axios from "axios";

const PYTHON_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:8000";

export const generateSpeech = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text required" });

    const response = await axios.post(`${PYTHON_URL}/tts`, { text });
    const audio_file = response.data.audio_file;

    res.status(200).json({ audio_file });
  } catch (err) {
    console.error("TTS Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
