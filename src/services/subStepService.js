import {SubStep} from '../postgres/postgres.js';

export const createSubStepService = async (newData) => {
    try {
        const data = await SubStep.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi SubStep: ' + error.message);
    }
};

export const getSubStepByIdService = async (id) => {
    try {
        const data = await SubStep.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SubStep không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi SubStep: ' + error.message);
    }
};

export const getAllSubStepService = async () => {
    try {
        return await SubStep.findAll({
            where: {
                show: true
            },
            order: [["position", "ASC"]],
        });

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi SubStep: ' + error.message);
    }
};

export const updateSubStepService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await SubStep.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SubStep không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi SubStep: ' + error.message);
    }
};

export const deleteSubStepService = async (ids) => {
    try {
        const dataList = await SubStep.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi SubStep nào tồn tại với các ID này');
        }
        await SubStep.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi SubStep đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi SubStep: ' + error.message);
    }
};

