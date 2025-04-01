import {
    KtqtNhaCungCap
} from '../postgres/postgres.js';

export const createKtqtNhaCungCapService = async (newData) => {
    try {
        const data = await KtqtNhaCungCap.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KtqtNhaCungCap: ' + error.message);
    }
};

export const getKtqtNhaCungCapByIdService = async (id) => {
    try {
        const data = await KtqtNhaCungCap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KtqtNhaCungCap không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KtqtNhaCungCap: ' + error.message);
    }
};

export const getAllKtqtNhaCungCapService = async () => {
    try {
        const dataList = await KtqtNhaCungCap.findAll({
            where: {
                show: true // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KtqtNhaCungCap: ' + error.message);
    }
};

export const updateKtqtNhaCungCapService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await KtqtNhaCungCap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KtqtNhaCungCap không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KtqtNhaCungCap: ' + error.message);
    }
};

export const deleteKtqtNhaCungCapService = async (ids) => {
    try {
        const dataList = await KtqtNhaCungCap.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KtqtNhaCungCap nào tồn tại với các ID này');
        }
        await KtqtNhaCungCap.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi KtqtNhaCungCap đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KtqtNhaCungCap: ' + error.message);
    }
};
