import {Tag} from '../postgres/postgres.js';

export const createTagService = async (newData) => {
    try {
        const data = await Tag.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Tag: ' + error.message);
    }
};

export const getTagByIdService = async (id) => {
    try {
        const data = await Tag.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Tag không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Tag: ' + error.message);
    }
};

export const getAllTagService = async () => {
    try {
        const dataList = await Tag.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Tag: ' + error.message);
    }
};

export const updateTagService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Tag.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Tag không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Tag: ' + error.message);
    }
};

export const deleteTagService = async (ids) => {
    try {
        const dataList = await Tag.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Tag nào tồn tại với các ID này');
        }
        await Tag.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Tag đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Tag: ' + error.message);
    }
};

