import {Nganh} from '../postgres/postgres.js';

export const createNganhService = async (newData) => {
    try {
        const data = await Nganh.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Nganh: ' + error.message);
    }
};

export const getNganhByIdService = async (id) => {
    try {
        const data = await Nganh.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Nganh không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Nganh: ' + error.message);
    }
};

export const getAllNganhService = async () => {
    try {
        const dataList = await Nganh.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Nganh: ' + error.message);
    }
};

export const updateNganhService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Nganh.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Nganh không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Nganh: ' + error.message);
    }
};

export const deleteNganhService = async (ids) => {
    try {
        const dataList = await Nganh.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Nganh nào tồn tại với các ID này');
        }
        await Nganh.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Nganh đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Nganh: ' + error.message);
    }
};

