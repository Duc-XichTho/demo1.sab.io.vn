import { KHKDTongHop } from "../postgres/postgres.js";

export const khkdTongHopService = {
    async create(data) {
        try {
            return await KHKDTongHop.create(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            return await KHKDTongHop.findAll({
                where: { show: true },
                order: [['created_at', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            return await KHKDTongHop.findOne({
                where: { id, show: true }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(id, data) {
        try {
            const tongHop = await KHKDTongHop.findOne({
                where: { id, show: true }
            });
            if (!tongHop) return null;
            return await tongHop.update(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const tongHop = await KHKDTongHop.findOne({
                where: { id, show: true }
            });
            if (!tongHop) return null;
            return await tongHop.update({ 
                show: false,
                deleted_at: new Date()
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}; 