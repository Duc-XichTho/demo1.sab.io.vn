import {NhanVien} from '../postgres/postgres.js';

export const createNhanVienService = async (newData) => {
    try {
        const data = await NhanVien.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi NhanVien: ' + error.message);
    }
};

export const getNhanVienByIdService = async (id) => {
    try {
        const data = await NhanVien.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NhanVien không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi NhanVien: ' + error.message);
    }
};

export const getAllNhanVienService = async () => {
    try {
        const dataList = await NhanVien.findAll({
            where: {
                show: true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi NhanVien: ' + error.message);
    }
};

export const updateNhanVienService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await NhanVien.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NhanVien không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi NhanVien: ' + error.message);
    }
};

export const deleteNhanVienService = async (ids) => {
    try {
        const dataList = await NhanVien.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi NhanVien nào tồn tại với các ID này');
        }
        await NhanVien.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi NhanVien đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi NhanVien: ' + error.message);
    }
};

