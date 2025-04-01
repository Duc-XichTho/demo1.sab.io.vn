import {Template} from '../postgres/postgres.js';

export const createTemplateService = async (newData) => {
    try {
        const data = await Template.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Template: ' + error.message);
    }
};

export const getTemplateByIdService = async (id) => {
    try {
        const data = await Template.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Template không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Template: ' + error.message);
    }
};

export const getAllTemplateService = async () => {
    try {
        return await Template.findAll({
            where: {
                show: true
            },
            order: [["name", "ASC"]],
        });

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Template: ' + error.message);
    }
};

export const updateTemplateService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await Template.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Template không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Template: ' + error.message);
    }
};

export const deleteTemplateService = async (ids) => {
    try {
        const dataList = await Template.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Template nào tồn tại với các ID này');
        }
        await Template.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Template đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Template: ' + error.message);
    }
};

