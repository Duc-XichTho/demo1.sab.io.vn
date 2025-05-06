import { KHKD } from "../postgres/postgres.js";

export const khkdService = {
    async create(data) {
        try {
            return await KHKD.create(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            return await KHKD.findAll({
                where: { show: true },
                order: [['created_at', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            return await KHKD.findOne({
                where: { id, show: true }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(id, data) {
        try {
            const khkd = await KHKD.findOne({
                where: { id, show: true }
            });
            if (!khkd) return null;
            return await khkd.update(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const khkd = await KHKD.findOne({
                where: { id, show: true }
            });
            if (!khkd) return null;
            return await khkd.update({ 
                show: false,
                deleted_at: new Date()
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}; 