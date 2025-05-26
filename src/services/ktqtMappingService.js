import { KtqtMapping } from "../postgres/postgres.js";

export const ktqtMappingService = {
    async create(data) {
        try {
            return await KtqtMapping.create(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            return await KtqtMapping.findAll({
                where: { show: true },
                order: [['id', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            return await KtqtMapping.findOne({
                where: { id, show: true }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(id, data) {
        try {
            const item = await KtqtMapping.findOne({
                where: { id, show: true }
            });
            if (!item) return null;
            return await item.update(data);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const item = await KtqtMapping.findOne({
                where: { id, show: true }
            });
            if (!item) return null;
            return await item.update({ 
                show: false
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}; 