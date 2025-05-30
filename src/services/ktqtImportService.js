import { KtqtImport, KTQTSoKeToan } from "../postgres/postgres.js";

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
            // Lấy tất cả idKTQT từ KTQTSoKeToan (chỉ lấy bản ghi show=true nếu cần)
            const soKeToanList = await KTQTSoKeToan.findAll({
                attributes: ['idKTQT'],
                where: { show: true },
                raw: true
            });
            const idKTQTList = soKeToanList.map(e => e.idKTQT);

            // Lấy danh sách import
            const importList = await KtqtImport.findAll({
                where: { show: true },
                order: [['id', 'DESC']],
                raw: true
            });

            // Gắn trường daHopNhat
            return importList.map(item => ({
                ...item,
                daHopNhat: idKTQTList.includes(item.id)
            }));
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