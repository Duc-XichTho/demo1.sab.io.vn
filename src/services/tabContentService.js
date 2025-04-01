import { TabContent } from "../postgres/postgres.js";

// GET
export const getAllTabContent = async () => {
    try {
        const result = await TabContent.findAll({
            where: { show: true },
            order: [['id', 'DESC']]
        });
        return result;
    } catch (e) {
        throw new Error('Lỗi khi tìm dữ liệu tab content: ' + e.message);
    }
}

// UPDATE
export const updateTabContent = async (data) => {
    try {
        const { id } = data;
        let tabContent = await TabContent.findByPk(id)
        let response;
        if (tabContent) {
            response = tabContent.update(data);
        } else {
            throw new Error('Lỗi khi tìm dữ liệu tab content: ' + e.message);
        }
        return response;
    } catch (e) {
        throw new Error('Lỗi khi cập nhật dữ liệu tab content: ' + e.message);
    }
}

// CREATE
export const createTabContent = async (data) => {
    try {
        let response = await TabContent.create(data);
        return response;
    } catch (e) {
        throw new Error('Lỗi khi tạo tab content: ' + e.message);
    }
}