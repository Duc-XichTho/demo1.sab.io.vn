import { KtqtImport } from "../postgres/postgres.js";

export const ktqtImportService = {
    async create(data) {
        try {
            if (Array.isArray(data)) {
                return await KtqtImport.bulkCreate(data);
            } else {
                return await KtqtImport.create(data);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            return await KtqtImport.findAll({
                where: { show: true },
                order: [['id', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            return await KtqtImport.findOne({
                where: { id, show: true }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(id, data) {
        try {
            if (Array.isArray(id)) {
                // Bulk update: id là mảng các id
                const [affectedRows] = await KtqtImport.update(data, {
                    where: { id: id, show: true }
                });
                return affectedRows > 0 ? { updated: affectedRows } : null;
            } else {
                // Update 1 bản ghi
                const item = await KtqtImport.findOne({
                    where: { id, show: true }
                });
                if (!item) return null;
                return await item.update(data);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const item = await KtqtImport.findOne({
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