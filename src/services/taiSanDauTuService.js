import {TaiSanDauTu} from '../postgres/postgres.js';

export const createTaiSanDauTuService = async (newData) => {
    try {
        const data = await TaiSanDauTu.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi TaiSanDauTu: ' + error.message);
    }
};

export const getTaiSanDauTuByIdService = async (id) => {
    try {
        const data = await TaiSanDauTu.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TaiSanDauTu không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi TaiSanDauTu: ' + error.message);
    }
};

export const getAllTaiSanDauTuService = async () => {
    try {
        const dataList = await TaiSanDauTu.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi TaiSanDauTu: ' + error.message);
    }
};

export const updateTaiSanDauTuService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await TaiSanDauTu.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TaiSanDauTu không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi TaiSanDauTu: ' + error.message);
    }
};

export const deleteTaiSanDauTuService = async (ids) => {
    try {
        const dataList = await TaiSanDauTu.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi TaiSanDauTu nào tồn tại với các ID này');
        }
        await TaiSanDauTu.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi TaiSanDauTu đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi TaiSanDauTu: ' + error.message);
    }
};

