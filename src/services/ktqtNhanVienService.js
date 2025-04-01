import {KtqtNhanVien} from '../postgres/postgres.js';

export const createKtqtNhanVienService = async (newData) => {
    try {
        const data = await KtqtNhanVien.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KtqtNhanVien: ' + error.message);
    }
};

export const getKtqtNhanVienByIdService = async (id) => {
    try {
        const data = await KtqtNhanVien.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KtqtNhanVien không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KtqtNhanVien: ' + error.message);
    }
};

export const getAllKtqtNhanVienService = async () => {
    try {
        const dataList = await KtqtNhanVien.findAll({
            where: {
                show: true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KtqtNhanVien: ' + error.message);
    }
};

export const updateKtqtNhanVienService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await KtqtNhanVien.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KtqtNhanVien không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KtqtNhanVien: ' + error.message);
    }
};

export const deleteKtqtNhanVienService = async (ids) => {
    try {
        const dataList = await KtqtNhanVien.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KtqtNhanVien nào tồn tại với các ID này');
        }
        await KtqtNhanVien.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi KtqtNhanVien đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KtqtNhanVien: ' + error.message);
    }
};

