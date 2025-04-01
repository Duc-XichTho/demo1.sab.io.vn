import {NganhReal} from '../postgres/postgres.js';

export const createNganhRealService = async (newData) => {
    try {
        const data = await NganhReal.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi NganhReal: ' + error.message);
    }
};

export const getNganhRealByIdService = async (id) => {
    try {
        const data = await NganhReal.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NganhReal không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi NganhReal: ' + error.message);
    }
};

export const getAllNganhRealService = async () => {
    try {
        const dataList = await NganhReal.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi NganhReal: ' + error.message);
    }
};

export const updateNganhRealService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await NganhReal.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi NganhReal không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi NganhReal: ' + error.message);
    }
};

export const deleteNganhRealService = async (ids) => {
    try {
        const dataList = await NganhReal.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi NganhReal nào tồn tại với các ID này');
        }
        await NganhReal.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi NganhReal đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi NganhReal: ' + error.message);
    }
};

