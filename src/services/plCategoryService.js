import {PlCategory} from '../postgres/postgres.js';

export const createPlCategoryService = async (newData) => {
    try {
        const data = await PlCategory.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PlCategory: ' + error.message);
    }
};

export const getPlCategoryByIdService = async (id) => {
    try {
        const data = await PlCategory.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PlCategory không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PlCategory: ' + error.message);
    }
};

export const getAllPlCategoryService = async () => {
    try {
        const dataList = await PlCategory.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PlCategory: ' + error.message);
    }
};

export const updatePlCategoryService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PlCategory.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PlCategory không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PlCategory: ' + error.message);
    }
};

export const deletePlCategoryService = async (ids) => {
    try {
        const dataList = await PlCategory.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PlCategory nào tồn tại với các ID này');
        }
        await PlCategory.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PlCategory đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PlCategory: ' + error.message);
    }
};

