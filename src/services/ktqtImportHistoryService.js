import { KtqtImportHistory } from "../postgres/postgres.js";

export const ktqtImportHistoryService = {
    async create(data) {
        try {
            if (Array.isArray(data)) {
                return await KtqtImportHistory.bulkCreate(data);
            } else {
                return await KtqtImportHistory.create(data);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            return await KtqtImportHistory.findAll({
                where: { show: true },
                order: [['id', 'DESC']]
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            return await KtqtImportHistory.findOne({
                where: { id, show: true }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async update(data) {
        try {
            if (Array.isArray(data)) {
                let updated = 0;
                for (const item of data) {
                    if (!item.id) continue;
                    const found = await KtqtImportHistory.findOne({ where: { id: item.id, show: true } });
                    if (found) {
                        await found.update(item);
                        updated++;
                    }
                }
                return updated > 0 ? { updated } : null;
            } else {
                if (!data.id) return null;
                const item = await KtqtImportHistory.findOne({ where: { id: data.id, show: true } });
                if (!item) return null;
                return await item.update(data);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const item = await KtqtImportHistory.findOne({
                where: { id, show: true }
            });
            if (!item) return null;
            return await item.update({ 
                show: false
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async hideAllByImportType(import_type) {
        try {
            const [affectedRows] = await KtqtImportHistory.update(
                { show: false },
                { where: { import_type, show: true } }
            );
            return { updated: affectedRows };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}; 