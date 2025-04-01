import {PBLSX} from '../postgres/postgres.js';

export const createPBLSXService = async (newData) => {
    try {
        const data = await PBLSX.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PBLSX: ' + error.message);
    }
};

export const getPBLSXByIdService = async (id) => {
    try {
        const data = await PBLSX.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PBLSX không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PBLSX: ' + error.message);
    }
};

export const getAllPBLSXService = async () => {
    try {
        const dataList = await PBLSX.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PBLSX: ' + error.message);
    }
};

export const updatePBLSXService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PBLSX.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PBLSX không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PBLSX: ' + error.message);
    }
};

export const deletePBLSXService = async (ids) => {
    try {
        const dataList = await PBLSX.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PBLSX nào tồn tại với các ID này');
        }
        await PBLSX.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PBLSX đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PBLSX: ' + error.message);
    }
};

