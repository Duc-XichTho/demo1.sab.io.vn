import {BCanvasDataOriginalRow} from '../postgres/postgres.js';
import dayjs from 'dayjs';
import {cacheQueue} from "./redis/cacheQueue.js";
import dotenv from "dotenv";
dotenv.config();

const keyAllRow = `${process.env.FOLDER_NAME_BUCKET_BITFLY}_bcanvas_data_original_row_all`;
const keyForOneOriginalData = (id) => `${process.env.FOLDER_NAME_BUCKET_BITFLY}_bcanvas_data_original_row/original_id:${id}`

export const createBCanvasDataOriginalRowService = async (id_DataOriginal,newData) => {
    try {
        const data = await BCanvasDataOriginalRow.bulkCreate(newData);
        cacheQueue.delete(keyAllRow);
        cacheQueue.delete(keyForOneOriginalData(id_DataOriginal));
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi BCanvasDataOriginalRow: ' + error.message);
    }
};

export const getBCanvasDataOriginalRowByIdService = async (id) => {
    try {
        const data = await BCanvasDataOriginalRow.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi BCanvasDataOriginalRow không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi BCanvasDataOriginalRow: ' + error.message);
    }
};

export const getBCanvasDataOriginalRowsByIdDataOriginalService = async (id) => {
    try {
        const data = await BCanvasDataOriginalRow.findAll({
            where: { id_DataOriginal: id }
        });

        return data; // luôn trả về [] nếu không có bản ghi
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách BCanvasDataOriginalRow: ' + error.message);
    }
};


export const getAllBCanvasDataOriginalRowService = async () => {
    try {
        const cachedData = await cacheQueue.get(keyAllRow);
        if (cachedData) {
            return cachedData;
        }
        const dataList = await BCanvasDataOriginalRow.findAll({
            where: {
                show: true
            }
        });
        cacheQueue.set(keyAllRow, dataList);
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi BCanvasDataOriginalRow: ' + error.message);
    }
};

// Update the update service to handle cache
export const updateBCanvasDataOriginalRowService = async (id_DataOriginal,dataArray) => {
    try {
        const results = [];
        for (const item of dataArray) {
            const data = await BCanvasDataOriginalRow.findByPk(item.id);
            if (!data) {
                throw new Error(`Bản ghi BCanvasDataOriginalRow với ID ${item.id} không tồn tại`);
            }
            item.updateAt = dayjs().toDate();
            await data.update(item);
            results.push(data);
        }

        // Update cache
        const cachedData = await cacheQueue.get(keyAllRow);
        if (cachedData) {
            const updatedCache = cachedData.map(cacheItem => {
                const updateItem = dataArray.find(item => item.id === cacheItem.id);
                return updateItem ? { ...cacheItem, ...updateItem } : cacheItem;
            });
            await cacheQueue.set(keyAllRow, updatedCache);
        }
        cacheQueue.delete(keyForOneOriginalData(id_DataOriginal));

        return results;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật hàng loạt bản ghi BCanvasDataOriginalRow: ' + error.message);
    }
};


// Update delete service to handle cache
export const deleteBCanvasDataOriginalRowService = async (ids) => {
    try {
        const dataList = await BCanvasDataOriginalRow.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi BCanvasDataOriginalRow nào tồn tại với các ID này');
        }
        await BCanvasDataOriginalRow.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );

        // Update cache
        const cachedData = await cacheQueue.get(keyAllRow);
        if (cachedData) {
            const updatedCache = cachedData.filter(item => !ids.includes(item.id));
            await cacheQueue.set(keyAllRow, updatedCache);
        }
        await cacheQueue.delete(keyForOneOriginalData(dataList.id_DataOriginal));
        return {message: 'Các bản ghi BCanvasDataOriginalRow đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi BCanvasDataOriginalRow: ' + error.message);
    }
};

