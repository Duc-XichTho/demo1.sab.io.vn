import {PMVCategories} from '../postgres/postgres.js';

export const createPMVCategoriesService = async (newData) => {
    try {
        const data = await PMVCategories.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVCategories: ' + error.message);
    }
};

export const getPMVCategoriesByIdService = async (id) => {
    try {
        const data = await PMVCategories.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVCategories không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVCategories: ' + error.message);
    }
};

export const getAllPMVCategoriesService = async () => {
    try {
        const dataList = await PMVCategories.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVCategories: ' + error.message);
    }
};

export const updatePMVCategoriesService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PMVCategories.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVCategories không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVCategories: ' + error.message);
    }
};

export const deletePMVCategoriesService = async (ids) => {
    try {
        const dataList = await PMVCategories.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVCategories nào tồn tại với các ID này');
        }
        await PMVCategories.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PMVCategories đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVCategories: ' + error.message);
    }
};

