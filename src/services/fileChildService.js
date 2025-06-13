import { FileChild } from "../postgres/postgres.js";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import {deleteEmbedDataFile} from "./serviceApi/serviceApi.js";

const s3Client = new S3Client({
  region: "hn",
  endpoint: process.env.END_POINT,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = "bucket-xichtho";

function extractS3KeyFromUrl(url) {
  // url dạng: https://bucket-xichtho.hn.ss.bfcplatform.vn/folder/file.ext
  try {
    const parsedUrl = new URL(url);
    // Bỏ dấu '/' đầu tiên
    return parsedUrl.pathname.startsWith("/") ? parsedUrl.pathname.slice(1) : parsedUrl.pathname;
  } catch {
    return null;
  }
}

export const createFileChildService = async (newData) => {
  try {
    const data = await FileChild.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi FileChild: " + error.message);
  }
};

export const getFileChildByIdService = async (id) => {
  try {
    const data = await FileChild.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi FileChild không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi FileChild: " + error.message);
  }
};

export const getFileChildService = async () => {
  try {
    const dataList = await FileChild.findAll({
      order: [["id", "DESC"]],
    });

    return dataList;
  } catch (error) {
    throw new Error(
      "Lỗi khi lấy danh sách bản ghi FileChild: " + error.message
    );
  }
};

export const updateFileChildService = async (newData) => {
  const { id, oldValue, code } = newData;
  try {
    const data = await FileChild.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi FileChild không tồn tại");
    }
    await data.update(newData);
    //     .then(() => {
    //     fetchAndUpdateRecords(oldValue, code)
    // });
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi FileChild: " + error.message);
  }
};

export const deleteFileChildService = async (id) => {
  try {
    const ids = Array.isArray(id) ? id : [id];

    const dataList = await FileChild.findAll({
      where: { id: ids },
    });

    if (dataList.length === 0) {
      throw new Error(
        `Không có bản ghi FileChild nào tồn tại với các ID: ${ids.join(", ")}`
      );
    }

    // Xóa file trên cloud
    for (const file of dataList) {
      if (file.url) {
        const key = extractS3KeyFromUrl(file.url);
        if (key) {
          try {
            await s3Client.send(new DeleteObjectCommand({
              Bucket: BUCKET_NAME,
              Key: key,
            }));
          } catch (err) {
            // Ghi log lỗi nhưng tiếp tục xóa các file khác
            console.error(`Lỗi khi xóa file trên cloud với key ${key}:`, err.message);
          }
        }
      }
    }

    // Xóa bản ghi khỏi database
    await FileChild.destroy({ where: { id: ids } });
    try {
      await deleteEmbedDataFile( ids );
    } catch (embedError) {
      console.error(
          `Lỗi khi gọi service A để xóa embeddings cho IDs: ${ids.join(", ")}`,
          embedError.message
      );
    }

    return {
      message: `Các bản ghi FileChild (ID: ${ids.join(", ")}) và file cloud đã được xóa thành công`,
    };
  } catch (error) {
    throw new Error(`Lỗi khi xóa các bản ghi FileChild: ${error.message}`);
  }
};
