import {SoChuoi} from '../postgres/postgres.js';

export const createSoChuoiService = async (newData) => {
    try {
        const data = await SoChuoi.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi SoChuoi: ' + error.message);
    }
};

export const getSoChuoiByIdService = async (id) => {
    try {
        const data = await SoChuoi.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SoChuoi không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi SoChuoi: ' + error.message);
    }
};

export const getAllSoChuoiService = async () => {
    try {
        const dataList = await SoChuoi.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi SoChuoi: ' + error.message);
    }
};

export const updateSoChuoiService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await SoChuoi.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SoChuoi không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi SoChuoi: ' + error.message);
    }
};

export const deleteSoChuoiService = async (ids) => {
    try {
        const dataList = await SoChuoi.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi SoChuoi nào tồn tại với các ID này');
        }
        await SoChuoi.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi SoChuoi đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi SoChuoi: ' + error.message);
    }
};

