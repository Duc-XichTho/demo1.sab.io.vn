import {CauHinh} from '../postgres/postgres.js';

export const createCauHinhService = async (newData) => {
    try {
        const data = await CauHinh.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi CauHinh: ' + error.message);
    }
};

export const getCauHinhByIdService = async (id) => {
    try {
        const data = await CauHinh.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CauHinh không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi CauHinh: ' + error.message);
    }
};

export const getAllCauHinhService = async () => {
    try {
        const dataList = await CauHinh.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi CauHinh: ' + error.message);
    }
};

export const updateCauHinhService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await CauHinh.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi CauHinh không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi CauHinh: ' + error.message);
    }
};

export const deleteCauHinhService = async (ids) => {
    try {
        const dataList = await CauHinh.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi CauHinh nào tồn tại với các ID này');
        }
        await CauHinh.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi CauHinh đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi CauHinh: ' + error.message);
    }
};

