import express from "express";
import axios from "axios";

const router = express.Router();

// POST /send-to-n8n
router.post("/send-to-n8n", async (req, res) => {
  const n8nUrl = "http://localhost:5678/webhook/f7d13e88-a4bb-4172-b614-b3f0b17f466b";
  const data = req.body;
  console.log(data);
  try {
    const response = await axios.post(n8nUrl, data, {
      headers: { "Content-Type": "application/json" }
    });
    console.log(response);
    res.status(200).json({ success: true, n8nResponse: response.data });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      n8nError: error.response?.data || null
    });
  }
});

export default router; 