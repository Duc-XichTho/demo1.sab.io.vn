import { AiQuestionTemplate,TemplateSettingAIReportBuilder} from "../postgres/postgres.js";

export const aiQuestionTemplateService = {
    async create(data) {
        try {
            if (Array.isArray(data)) {
                return await AiQuestionTemplate.bulkCreate(data);
            } else {
                return await AiQuestionTemplate.create(data);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findAll() {
        try {
            let items = await AiQuestionTemplate.findAll({
                where: { show: true },
                order: [['created_at', 'DESC']],
                raw: true
            });
            for (const item of items) {
                if (item.id_template) {
                    let template = await TemplateSettingAIReportBuilder.findOne({
                        where: { id: item.id_template, show: true }
                    });
                    if (!template) {
                        item.template = null;
                    } else {
                        item.template = template;
                    }
                } else {
                    item.template = null;
                }
            }
            return items;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findById(id) {
        try {
            let item = await AiQuestionTemplate.findOne({
                where: { id, show: true }
            });
            if (!item) return null;
            
            // Only fetch template if id_template exists and is not null
            if (item.id_template) {
                let template = await TemplateSettingAIReportBuilder.findOne({
                    where: { id: item.id_template, show: true }
                });
                if (!template) {
                    item.template = null;
                } else {
                    item.template = template;
                }
            } else {
                item.template = null;
            }
            
            return item;
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
                    const found = await AiQuestionTemplate.findOne({ where: { id: item.id, show: true } });
                    if (found) {
                        await found.update(item);
                        updated++;
                    }
                }
                return updated > 0 ? { updated } : null;
            } else {
                if (!data.id) return null;
                const item = await AiQuestionTemplate.findOne({ where: { id: data.id, show: true } });
                if (!item) return null;
                return await item.update(data);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async delete(id) {
        try {
            const item = await AiQuestionTemplate.findOne({
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