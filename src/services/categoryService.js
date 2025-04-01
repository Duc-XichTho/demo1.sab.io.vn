import { Category } from "../postgres/postgres.js";

// GET
export const getAllCategory = async () => {
    try {
        const result = await Category.findAll({
            where: { show: true },
            order: [['id', 'ASC']]
        });
        return result;
    } catch (e) {
        throw new Error('Lỗi khi tìm dữ liệu category: ' + e.message);
    }
}

// UPDATE
export const updateCategory = async (data) => {
    try {
        const { id } = data;
        let category = await Category.findByPk(id)
        let response;
        if (category) {
            response = category.update(data);
        } else {
            throw new Error('Lỗi khi tìm dữ liệu category: ' + e.message);
        }
        return response;
    } catch (e) {
        throw new Error('Lỗi khi cập nhật dữ liệu category: ' + e.message);
    }
}

// CREATE
export const createCategory = async (data) => {
    try {
        let response = await Category.create(data);
        return response;
    } catch (e) {
        throw new Error('Lỗi khi tạo category: ' + e.message);
    }
}