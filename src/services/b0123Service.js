import {B0123} from '../postgres/postgres.js';

export const createB0123Service = async (newData) => {
    try {
        const data = await B0123.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi B0123: ' + error.message);
    }
};

export const getB0123ByIdService = async (id) => {
    try {
        const data = await B0123.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi B0123 không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi B0123: ' + error.message);
    }
};

export const getAllB0123Service = async () => {
    try {
        const dataList = await B0123.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi B0123: ' + error.message);
    }
};

export const updateB0123Service = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await B0123.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi B0123 không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi B0123: ' + error.message);
    }
};

export const deleteB0123Service = async (ids) => {
    try {
        const dataList = await B0123.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi B0123 nào tồn tại với các ID này');
        }
        await B0123.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi B0123 đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi B0123: ' + error.message);
    }
};

