import {KhachHang} from '../postgres/postgres.js';

export const createKhachHangService = async (newData) => {
    try {
        const data = await KhachHang.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KhachHang: ' + error.message);
    }
};

export const getKhachHangByIdService = async (id) => {
    try {
        const data = await KhachHang.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KhachHang không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KhachHang: ' + error.message);
    }
};

export const getAllKhachHangService = async () => {
    try {
        const dataList = await KhachHang.findAll({
            where: {
                show: true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KhachHang: ' + error.message);
    }
};

export const updateKhachHangService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await KhachHang.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KhachHang không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KhachHang: ' + error.message);
    }
};

export const deleteKhachHangService = async (ids) => {
    try {
        const dataList = await KhachHang.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KhachHang nào tồn tại với các ID này');
        }
        await KhachHang.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi KhachHang đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KhachHang: ' + error.message);
    }
};

