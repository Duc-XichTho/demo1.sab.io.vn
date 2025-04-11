import {BCanvasDataOriginal, BCanvasDataOriginalRow} from '../postgres/postgres.js';
import dotenv from "dotenv";
import {cacheQueue} from "./redis/cacheQueue.js";

dotenv.config();
const keyAllRow = `${process.env.FOLDER_NAME_BUCKET_BITFLY}_bcanvas_data_original_row_all`
const keyForOneOriginalData = (id) => `${process.env.FOLDER_NAME_BUCKET_BITFLY}_bcanvas_data_original_row/original_id:${id}`

export const createBCanvasDataOriginalService = async (newData) => {
    try {
        const data = await BCanvasDataOriginal.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi BCanvasDataOriginal: ' + error.message);
    }
};

export const getBCanvasDataRowOriginalByOriginalIdService = async (id) => {
    try {
        let info = await BCanvasDataOriginal.findByPk(id);
        if (!info) {
            throw new Error('Bản ghi BCanvasDataOriginal không tồn tại');
        }

        let dataCacheForOneOriginal = await cacheQueue.get(keyForOneOriginalData(id))

        if (dataCacheForOneOriginal) {
            return dataCacheForOneOriginal;
        } else {
            let rowData = {info: info, rowData:[]};

            const cachedData = await cacheQueue.get(keyAllRow);

            if (cachedData) {
                let data = cachedData.filter(item => item.id_DataOriginal == id);
                if (data && data.length > 0) {

                    rowData.rowData = data.map(item => {
                        return item?.data;
                    });
                    console.log(rowData);
                }
            } else {
                let data = await BCanvasDataOriginalRow.findAll({where: {show: true}});
                cacheQueue.set(keyAllRow, data);
                data = data.filter(item => item.id_DataOriginal == id);
                if (data && data.length > 0) {
                    rowData.rowData = data.map(item => {
                        return item?.data;
                    });

                }
            }

            cacheQueue.set(keyForOneOriginalData(id), rowData);
            return rowData;
        }

    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi BCanvasDataOriginal: ' + error.message);
    }
};

export const getAllBCanvasDataOriginalService = async () => {
    try {
        const dataList = await BCanvasDataOriginal.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi BCanvasDataOriginal: ' + error.message);
    }
};

export const updateBCanvasDataOriginalService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await BCanvasDataOriginal.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BCanvasDataOriginal không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi BCanvasDataOriginal: ' + error.message);
    }
};

export const deleteBCanvasDataOriginalService = async (ids) => {
    try {
        const dataList = await BCanvasDataOriginal.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi BCanvasDataOriginal nào tồn tại với các ID này');
        }
        await BCanvasDataOriginal.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi BCanvasDataOriginal đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi BCanvasDataOriginal: ' + error.message);
    }
};

