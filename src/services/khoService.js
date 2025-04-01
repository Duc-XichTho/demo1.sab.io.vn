import {Kho} from '../postgres/postgres.js';

export const createKhoService = async (newData) => {
    try {
        const data = await Kho.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Kho: ' + error.message);
    }
};

export const getKhoByIdService = async (id) => {
    try {
        const data = await Kho.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kho không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Kho: ' + error.message);
    }
};

export const getAllKhoService = async () => {
    try {
        const dataList = await Kho.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Kho: ' + error.message);
    }
};

export const updateKhoService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Kho.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kho không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Kho: ' + error.message);
    }
};

export const deleteKhoService = async (ids) => {
    try {
        const dataList = await Kho.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Kho nào tồn tại với các ID này');
        }
        await Kho.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Kho đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Kho: ' + error.message);
    }
};

