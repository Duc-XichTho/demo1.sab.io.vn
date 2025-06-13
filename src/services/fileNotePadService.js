import {
    FileChild,
    FileNotePad, TemplateColumn, TemplateData, TemplateTable
} from '../postgres/postgres.js';
import {DeleteObjectCommand, S3Client} from "@aws-sdk/client-s3";
import {deleteEmbedDataFile} from "./serviceApi/serviceApi.js";

export const createFileNotePadService = async (newData) => {
    try {
        const data = await FileNotePad.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi FileNotePad: ' + error.message);
    }
};
export const getFileNotePadByIdService = async (id) => {
    try {
        const data = await FileNotePad.findByPk(id, { raw: true });
        if (!data || data.show !== true) {
            throw new Error('Bản ghi FileNotePad không tồn tại hoặc không được hiển thị');
        }
        if (data.table === 'ChartTemplate' || data.table === 'KPI') {
            data.isNotEdit = true;
        }

        if (data.table === 'Template') {
            const template = await TemplateTable.findOne({
                where: {
                    fileNote_id: data.id,
                    show: true,
                },
                raw: true,
            });
            if (template && (template.isCombine || template.mother_table_id)) {
                data.isNotEdit = true;
            }
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi FileNotePad: ' + error.message);
    }
};


export const getFileNotePadService = async () => {
    try {
        const dataList = await FileNotePad.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi FileNotePad: ' + error.message);
    }
};

export const updateFileNotePadService = async (newData) => {
    const {
        id,
        oldValue,
        code
    } = newData;
    try {
        const data = await FileNotePad.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi FileNotePad không tồn tại');
        }
        await data.update(newData)
        //     .then(() => {
        //     fetchAndUpdateRecords(oldValue, code)
        // });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi FileNotePad: ' + error.message);
    }
};

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


export const deleteFileNotePadService = async (id) => {
    try {
        const fileNotePad = await FileNotePad.findByPk(id);

        if (!fileNotePad) {
            throw new Error('Không có bản ghi FileNotePad nào tồn tại với ID này');
        }

        // 1. Cập nhật show = false cho FileNotePad
        await fileNotePad.update({ show: false });

        // 2. Tìm TemplateTable liên kết với fileNote_id
        const templateTable = await TemplateTable.findOne({
            where: { fileNote_id: id }
        });

        if (!templateTable) {
            throw new Error('Không tìm thấy TemplateTable liên quan');
        }

        const tableId = templateTable.id;

        // 2.1 Cập nhật show = false cho TemplateTable
        await templateTable.update({ show: false });

        await TemplateTable.update({ show: false }, { where: { mother_table_id: tableId } });

        // 3. Cập nhật show = false cho TemplateColumn và TemplateData liên quan
        await TemplateColumn.update({ show: false }, { where: { tableId: tableId } });

        await TemplateData.update({ show: false }, { where: { tableId: tableId } });

        if (fileNotePad.table === 'FileUpLoad') {
            const fileChildren = await FileChild.findAll({
                where: { table_id: String(fileNotePad.id) }
            });
            const fileChildIds = [];

            for (const file of fileChildren) {
                fileChildIds.push(file.id);

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

            // Gọi API để xóa external embeddings
            if (fileChildIds.length > 0) {
                await FileChild.update(
                    { show: false },
                    { where: { id: fileChildIds } }
                );
                await deleteEmbedDataFile(fileChildIds);
            }
        }
        return {
            message: 'Các bản ghi FileNotePad và dữ liệu liên quan đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn FileNotePad và dữ liệu liên quan: ' + error.message);
    }
};

