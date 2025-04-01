import {FileALL} from '../postgres/postgres.js';

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
        await FileALL.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi File đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi File: ' + error.message);
    }
};
