import { Input } from '../postgres/postgres.js';
import {Sequelize} from "sequelize";

export const createInputService = async (newData) => {
    try {
        const data = await Input.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Input: ' + error.message);
    }
};

export const getInputByIdService = async (id) => {
    try {
        const data = await Input.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Input không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Input: ' + error.message);
    }
};

export const getAllInputService = async () => {
    try {
        const dataList = await Input.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Input: ' + error.message);
    }
};

export const updateInputService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await Input.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Input không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Input: ' + error.message);
    }
};

export const deleteInputService = async (ids) => {
    try {
        const dataList = await Input.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Input nào tồn tại với các ID này');
        }
        await Input.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi Input đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Input: ' + error.message);
    }
};


export const findLastUpdateInputService = async () => {
    try {
        const mostRecentRecord = await Input.findOne({
            where: {
                updated_at: { [Sequelize.Op.ne]: null }
            },
            order: [['updated_at', 'DESC']],
        });

        if (mostRecentRecord) {
            return mostRecentRecord.updated_at;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error finding most recent updateAt record:', error);
        throw new Error('Failed to find the most recent record');
    }
};



export const findLastIdInputService  = async () => {
    try {
        const mostRecentRecord = await Input.findOne({
            order: [['id', 'DESC']],
        });

        if (mostRecentRecord) {
            return mostRecentRecord.id;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error finding most recent id record:', error);
        throw new Error('Failed to find the most id record');
    }
};
