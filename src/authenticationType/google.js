import * as dotenv from "dotenv";
dotenv.config();
import { OAuth2Client } from "google-auth-library";
import { User } from "../postgres/postgres.js";
import url from "url";
import jwt from "jsonwebtoken";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.URL_BACKEND_AUTH_SERVICE_REDIRECT_URIS
);

export const generateAuthUrl = () => {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
  });
};

export const handleOAuth2Callback = async (req, res) => {
  try {
    const qs = new url.URL(req.url, process.env.URL_BACKEND_AUTH_SERVICE).searchParams;
    const code = qs.get("code");

    const { tokens } = await oAuth2Client.getToken(code);

    oAuth2Client.setCredentials(tokens);

    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub, email, name, picture } = ticket.getPayload();

    let user = await User.findOne({ where: { email } });

    if (!user) {
      const template = fs.readFileSync(path.join(__dirname, '../templates/accessDenied.html'), 'utf8');
      const html = template.replace('{{clientUrl}}', process.env.URL_CLIENT);
      return res.status(403).send(html);
    }

    user.id = sub;
    user.name = name;
    user.picture = picture;
    await user.save();

    const payload = {
      email
    };

    const secretKey = process.env.JWT_SECRET;

    const token = jwt.sign(payload, secretKey, { expiresIn: "10h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.redirect(`${process.env.URL_CLIENT}/login-success`);

  } catch (e) {
    console.error(e);
    const template = fs.readFileSync(path.join(__dirname, '../templates/serverError.html'), 'utf8');
    const html = template.replace('{{clientUrl}}', process.env.URL_CLIENT);
    res.status(500).send(html);
  }
};
