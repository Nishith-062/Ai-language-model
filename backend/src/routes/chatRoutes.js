import express from "express";
import { sendMessage, getHistory } from "../controllers/chatController.js";
const router = express.Router();

router.post("/message", sendMessage);
router.get("/history/:userId", getHistory);

export default router;
