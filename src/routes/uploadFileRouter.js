import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import * as fs from "fs";
import * as path from "path";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const client = new S3Client({
  region: "hn",
  endpoint: process.env.END_POINT,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

router.post("/", upload.array("files"), async (req, res) => {
  try {
    const files = req.files;
    const bucketName = "bucket-xichtho";
    const folderName = process.env.FOLDER_NAME_BUCKET_BITFLY;

    if (!files || files.length === 0) {
      return res
        .status(400)
        .json({ error: "Vui lòng chọn ít nhất một file để upload." });
    }
    const uploadPromises = files.map(async (file) => {
      const fileExtension = path.extname(file.originalname).toLowerCase();
      const fileNameWithoutExtension = path.basename(
        file.originalname,
        fileExtension
      );
      const fileName = `${fileNameWithoutExtension}${fileExtension}`;

      const uploadParams = {
        Bucket: bucketName,
        Key: `${folderName}${fileName}`,
        Body: fs.createReadStream(file.path),
        ACL: "public-read",
        ContentType: file.mimetype,
      };

      const parallelUploads3 = new Upload({
        client: client,
        params: uploadParams,
      });

      await parallelUploads3.done();

      return {
        fileName: fileName,
        fileExtension: fileExtension,
        fileUrl: `https://${bucketName}.hn.ss.bfcplatform.vn/${uploadParams.Key}`,
      };
    });

    const results = await Promise.all(uploadPromises);

    files.forEach((file) => fs.unlinkSync(file.path));

    res.json({
      message: "UPLOADED",
      files: results,
    });
  } catch (err) {
    console.error("Lỗi khi upload files:", err);
    res.status(500).json({ error: "Đã có lỗi xảy ra." });
  }
});

export default router;
