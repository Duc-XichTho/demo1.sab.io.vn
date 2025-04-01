import {ChuongTrinh} from '../postgres/postgres.js';

export const createChuongTrinhService = async (newData) => {
    try {
        const data = await ChuongTrinh.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi ChuongTrinh: ' + error.message);
    }
};

export const getChuongTrinhByIdService = async (id) => {
    try {
        const data = await ChuongTrinh.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChuongTrinh không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi ChuongTrinh: ' + error.message);
    }
};

export const getAllChuongTrinhService = async () => {
    try {
        const dataList = await ChuongTrinh.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi ChuongTrinh: ' + error.message);
    }
};

export const updateChuongTrinhService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await ChuongTrinh.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi ChuongTrinh không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi ChuongTrinh: ' + error.message);
    }
};

export const deleteChuongTrinhService = async (ids) => {
    try {
        const dataList = await ChuongTrinh.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi ChuongTrinh nào tồn tại với các ID này');
        }
        await ChuongTrinh.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi ChuongTrinh đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi ChuongTrinh: ' + error.message);
    }
};

