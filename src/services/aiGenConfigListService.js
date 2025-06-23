import { AiGenConfigList } from "../postgres/postgres.js";

export const aiGenConfigListService = {
    async create(data) {
        try {
            const result = await AiGenConfigList.create(data);
            return result;
        } catch (error) {
            throw new Error(`Error creating AiGenConfigList: ${error.message}`);
        }
    },

    async findAll() {
        try {
            const result = await AiGenConfigList.findAll({
                where: { show: true },
                order: [['created_at', 'DESC']]
            });
            return result;
        } catch (error) {
            throw new Error(`Error finding AiGenConfigList: ${error.message}`);
        }
    },

    async findById(id) {
        try {
            const result = await AiGenConfigList.findOne({
                where: { id, show: true }
            });
            return result;
        } catch (error) {
            throw new Error(`Error finding AiGenConfigList by id: ${error.message}`);
        }
    },

    async update(data) {
        try {
            const { id, ...updateData } = data;
            const result = await AiGenConfigList.update(updateData, {
                where: { id, show: true },
                returning: true
            });
            return result[1][0];
        } catch (error) {
            throw new Error(`Error updating AiGenConfigList: ${error.message}`);
        }
    },

    async delete(id) {
        try {
            const result = await AiGenConfigList.update(
                { show: false },
                { where: { id, show: true } }
            );
            return result[0] > 0;
        } catch (error) {
            throw new Error(`Error deleting AiGenConfigList: ${error.message}`);
        }
    }
}; 