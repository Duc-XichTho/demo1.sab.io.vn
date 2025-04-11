// routes/deleteRoute.js
import express from "express";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const client = new S3Client({
    region: "hn",
    endpoint: process.env.END_POINT,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
});

router.delete("/", async (req, res) => {
    try {
        const { fileKey, fileUrl } = req.body;
        const bucketName = "bucket-xichtho";

        // Ưu tiên dùng fileKey, nếu không có thì cố gắng tách từ fileUrl
        let key = fileKey;

        if (!key && fileUrl) {
            try {
                const parsedUrl = new URL(fileUrl);
                key = parsedUrl.pathname.slice(1); // Bỏ dấu `/` đầu
            } catch (e) {
                return res.status(400).json({ error: "fileUrl không hợp lệ." });
            }
        }

        if (!key) {
            return res.status(400).json({ error: "Thiếu fileKey hoặc fileUrl." });
        }

        const deleteParams = {
            Bucket: bucketName,
            Key: key,
        };

        await client.send(new DeleteObjectCommand(deleteParams));

        res.json({ message: "Xóa thành công", fileKey: key });
    } catch (error) {
        console.error("Lỗi khi xóa file:", error);
        res.status(500).json({ error: "Không thể xóa file." });
    }
});

export default router;
