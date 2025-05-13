import {DienGiai} from '../postgres/postgres.js';

export const createDienGiaiService = async (newData) => {
    try {
        const data = await DienGiai.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DienGiai: ' + error.message);
    }
};

export const getDienGiaiByIdService = async (id) => {
    try {
        const data = await DienGiai.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DienGiai không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DienGiai: ' + error.message);
    }
};

export const getDienGiaiByNameService = async (name) => {
    try {
        const data = await DienGiai.findOne({
            where: { name },
        });

        if (!data) {
            throw new Error('Bản ghi DienGiai không tồn tại');
        }

        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DienGiai: ' + error.message);
    }
};


export const getAllDienGiaiService = async () => {
    try {
        const dataList = await DienGiai.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DienGiai: ' + error.message);
    }
};

export const updateDienGiaiService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await DienGiai.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DienGiai không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DienGiai: ' + error.message);
    }
};

export const deleteDienGiaiService = async (ids) => {
    try {
        const dataList = await DienGiai.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DienGiai nào tồn tại với các ID này');
        }
        await DienGiai.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi DienGiai đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DienGiai: ' + error.message);
    }
};

