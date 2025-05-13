import {KHKDElement} from "../postgres/postgres.js";

export const khkdElementService = {
    async create(data) {
        try {
            return await KHKDElement.create(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            return await KHKDElement.findAll({
                where: { show: true },
                order: [['created_at', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findByKhoanMuc(khoanMuc) {
        try {
            return await KHKDElement.findAll({
                where : {
                    khoanMuc : khoanMuc,
                    show : true,
                },
                order: [["id", "DESC"]]

            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            return await KHKDElement.findOne({
                where: { id, show: true }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findByKHKDId(khkdId) {
        try {
            return await KHKDElement.findAll({
                where: { idKHKD: khkdId, show: true },
                order: [['created_at', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(id, data) {
        try {
            const element = await KHKDElement.findOne({
                where: { id, show: true }
            });
            if (!element) return null;
            return await element.update(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const element = await KHKDElement.findOne({
                where: { id, show: true }
            });
            if (!element) return null;
            return await element.update({ 
                show: false,
                deleted_at: new Date()
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}; 