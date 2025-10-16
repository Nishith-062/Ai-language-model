import axios from "axios";

const PYTHON_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:8000";

export const checkGrammar = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text required" });

    const response = await axios.post(`${PYTHON_URL}/grammar`, { text });
    const corrections = response.data.corrections;

    res.status(200).json({ corrections });
  } catch (err) {
    console.error("Grammar Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
