import {FileALL} from '../postgres/postgres.js';
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

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
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.startsWith("/") ? parsedUrl.pathname.slice(1) : parsedUrl.pathname;
  } catch {
    return null;
  }
}

export const createFileService = async (newData) => {
    try {
        const data = await FileALL.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi File: ' + error.message);
    }
};

export const getFileByIdService = async (id) => {
    try {
        const data = await FileALL.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi File không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi File: ' + error.message);
    }
};

export const getAllFileService = async () => {
    try {
        const dataList = await FileALL.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi File: ' + error.message);
    }
};

export const updateFileService = async (newData) => {
    const {id, oldValue, code} = newData;
    try {
        const data = await FileALL.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi File không tồn tại');
        }
        await data.update(newData)
        //     .then(() => {
        //     fetchAndUpdateRecords(oldValue, code)
        // });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi File: ' + error.message);
    }
};

export const deleteFileService = async (ids) => {
    try {
        const dataList = await FileALL.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi File nào tồn tại với các ID này');
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
                console.error(`Lỗi khi xóa file trên cloud với key ${key}:`, err.message);
              }
            }
          }
        }

        // Xóa bản ghi khỏi database
        await FileALL.destroy({ where: { id: ids } });

        return {message: 'Các bản ghi File và file cloud đã được xóa thành công'};
    } catch (error) {
        throw new Error('Lỗi khi xóa các bản ghi File: ' + error.message);
    }
};
