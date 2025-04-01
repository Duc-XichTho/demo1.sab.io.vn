import { Setting } from "../postgres/postgres.js";

// GET
export const getSettingByType = async (type) => {
    try {
        const data = await Setting.findOne({
            where: {
                type,
            },
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Setting: ' + error.message);
    }
};

// CREATE
export const createSettingService = async (newData) => {
    try {
        const data = await Setting.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Setting: ' + error.message);
    };
};

// UPDATE
export const updateSettingService = async (newData) => {
    const { id } = newData;
    try {
        const data = await Setting.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Setting không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Setting: ' + error.message);
    }
};