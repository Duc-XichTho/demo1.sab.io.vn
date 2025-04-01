import {
    NhaCungCap
} from '../postgres/postgres.js';

export const createNhaCungCapService = async (newData) => {
    try {
        const data = await NhaCungCap.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi NhaCungCap: ' + error.message);
    }
};

export const getNhaCungCapByIdService = async (id) => {
    try {
        const data = await NhaCungCap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NhaCungCap không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi NhaCungCap: ' + error.message);
    }
};

export const getAllNhaCungCapService = async () => {
    try {
        const dataList = await NhaCungCap.findAll({
            where: {
                show: true // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi NhaCungCap: ' + error.message);
    }
};

export const updateNhaCungCapService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await NhaCungCap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NhaCungCap không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi NhaCungCap: ' + error.message);
    }
};

export const deleteNhaCungCapService = async (ids) => {
    try {
        const dataList = await NhaCungCap.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi NhaCungCap nào tồn tại với các ID này');
        }
        await NhaCungCap.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi NhaCungCap đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi NhaCungCap: ' + error.message);
    }
};
