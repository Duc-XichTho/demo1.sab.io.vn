import { Step } from '../postgres/postgres.js';

export const getAllStepByTemplateIdService = async (templateId) => {
    try {
        return await Step.findAll({
            where: {
                template_id: templateId,
            },
        });
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Step: ' + error.message);
    }
}

export const getAllStepByCardIdService = async (cardId) => {
    try {
        return await Step.findAll({
            where: {
                card_id: cardId,
            },
        });
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Step: ' + error.message);
    }
}

export const createStepService = async (newData) => {
    try {
        const data = await Step.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Step: ' + error.message);
    }
};

export const getStepByIdService = async (id) => {
    try {
        const data = await Step.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Step không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Step: ' + error.message);
    }
};

export const getAllStepService = async () => {
    try {
        return await Step.findAll({
            where: {
                show: true
            },
            order: [["position", "ASC"]],
        });

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Step: ' + error.message);
    }
};

export const updateStepService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await Step.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Step không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Step: ' + error.message);
    }
};

export const deleteStepService = async (ids) => {
    try {
        const dataList = await Step.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Step nào tồn tại với các ID này');
        }
        await Step.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi Step đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Step: ' + error.message);
    }
};

