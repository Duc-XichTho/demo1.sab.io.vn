import express from "express";
import dotenv from "dotenv";
import {
  generateAuthUrl,
  handleOAuth2Callback,
} from "../authenticationType/google.js";

dotenv.config();
const router = express.Router();

router.get("/login", (req, res) => {
  const url = generateAuthUrl();
  res.redirect(url);
});

router.get("/oauth2callback", handleOAuth2Callback);

router.post("/logout", (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });

  res.status(200).json({ message: "Logout successful" });
});

export default router;
