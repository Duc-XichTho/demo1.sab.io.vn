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

    async update(data) {
        try {
            if (Array.isArray(data)) {
                // Bulk update: data là mảng các object, mỗi object phải có id
                let updated = 0;
                for (const item of data) {
                    if (!item.id) continue;
                    const found = await KtqtImport.findOne({ where: { id: item.id, show: true } });
                    if (found) {
                        await found.update(item);
                        updated++;
                    }
                }
                return updated > 0 ? { updated } : null;
            } else {
                // Update 1 bản ghi
                if (!data.id) return null;
                const item = await KtqtImport.findOne({ where: { id: data.id, show: true } });
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