import {
    DuAn
} from '../postgres/postgres.js';

export const createDuAnService = async (newData) => {
    try {
        const data = await DuAn.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DuAn: ' + error.message);
    }
};

export const getDuAnByIdService = async (id) => {
    try {
        const data = await DuAn.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DuAn không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DuAn: ' + error.message);
    }
};

export const getAllDuAnService = async () => {
    try {
        const dataList = await DuAn.findAll({
            where: {
                show: true // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DuAn: ' + error.message);
    }
};

export const updateDuAnService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await DuAn.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DuAn không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DuAn: ' + error.message);
    }
};

export const deleteDuAnService = async (ids) => {
    try {
        const dataList = await DuAn.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DuAn nào tồn tại với các ID này');
        }
        await DuAn.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi DuAn đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DuAn: ' + error.message);
    }
};