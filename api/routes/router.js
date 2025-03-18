import express from "express";
import { register, login } from "../controllers/auth.js";
import { sendMessage, getChatHistory } from "../controllers/chatController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/chat/send", sendMessage);
router.get("/chat/history", getChatHistory);

export default router;