import {KTQTPlan} from '../postgres/postgres.js';

export const createKTQTPlanService = async (newData) => {
    try {
        const data = await KTQTPlan.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KTQTPlan: ' + error.message);
    }
};

export const getKTQTPlanByIdService = async (id) => {
    try {
        const data = await KTQTPlan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KTQTPlan không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KTQTPlan: ' + error.message);
    }
};

export const getAllKTQTPlanService = async () => {
    try {
        const dataList = await KTQTPlan.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KTQTPlan: ' + error.message);
    }
};

export const updateKTQTPlanService = async (newData) => {
    const { id, } = newData;
    try {
        const data = await KTQTPlan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KTQTPlan không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KTQTPlan: ' + error.message);
    }
};

export const deleteKTQTPlanService = async (ids) => {
    try {
        const dataList = await KTQTPlan.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KTQTPlan nào tồn tại với các ID này');
        }
        await KTQTPlan.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi KTQTPlan đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KTQTPlan: ' + error.message);
    }
};


