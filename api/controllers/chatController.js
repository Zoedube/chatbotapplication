import { db } from "../db.js";
import jwt from "jsonwebtoken";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Replace OpenAI with Gemini
import dotenv from "dotenv";
dotenv.config();

// Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("Token received:", token);
  if (!token) {
    console.log("No token provided");
    return res.status(401).json("Not authenticated!");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(403).json("Token is not valid!");
    }
    console.log("Decoded user:", user);
    req.user = user;
    if (!user.id) {
      console.error("No user.id in token payload");
      return res.status(400).json("Invalid token payload: missing id");
    }
    next();
  });
};

export const sendMessage = [
  verifyToken,
  async (req, res) => {
    try {
      const { prompt } = req.body;
      const userId = req.user.id;

      if (!prompt) return res.status(400).json({ message: "Prompt is required" });

      console.log("Sending Gemini request for user:", userId, "with prompt:", prompt);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Free tier model
      const result = await model.generateContent(prompt);
      const aiResponse = await result.response.text();
      console.log("Gemini response received:", aiResponse);

      const q = "INSERT INTO chat_history(`user_id`, `prompt`, `response`) VALUES (?)";
      const values = [userId, prompt, aiResponse];
      console.log("Executing query with values:", values);

      db.query(q, [values], (err, data) => { // Note: Changed to array [values] for mysql2
        if (err) {
          console.error("Database insert error:", err);
          return res.status(500).json({ message: "Database error", details: err.message });
        }
        console.log("Message saved to DB with ID:", data.insertId);
        return res.status(200).json({
          id: data.insertId,
          prompt,
          response: aiResponse,
          created_at: new Date(),
        });
      });
    } catch (error) {
      console.error("SendMessage error:", error);
      return res.status(500).json({ message: "Error processing request", details: error.message });
    }
  },
];

export const getChatHistory = [
  verifyToken,
  (req, res) => {
    try {
      const userId = req.user.id;
      console.log("Fetching history for user:", userId);

      const q = "SELECT * FROM chat_history WHERE user_id = ? ORDER BY created_at DESC";
      console.log("Executing query with userId:", userId);

      db.query(q, [userId], (err, data) => {
        if (err) {
          console.error("Database fetch error:", err);
          return res.status(500).json({ message: "Database error", details: err.message });
        }
        console.log("History fetched:", data.length, "records");
        return res.status(200).json(data);
      });
    } catch (error) {
      console.error("GetChatHistory error:", error);
      return res.status(500).json({ message: "Error fetching history", details: error.message });
    }
  },
];