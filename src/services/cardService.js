import { Card } from '../postgres/postgres.js';

export const getAllStepFromCardService = async () => {
    try {
        const dataCard = await Card.findAll({ where: { show: true } });

        const result = [];

        for (const card of dataCard) {
            const { id: card_id, chain_id, cau_truc, name: card_name, code: card_code } = card;

            const filteredSteps = cau_truc
                .filter(step => step.status === 'pending' || step.status === 'duyet_1')
                .map(step => ({
                    ...step,
                    chain_id,
                    card_id,
                    card_name,
                    card_code,
                    step_code: `S${card_id}|${step.id}`,
                }));

            result.push(...filteredSteps);

        }

        return result;
    } catch (error) {
        console.error('Error fetching steps from cards:', error);
        throw error;
    }
};


export const createCardService = async (newData) => {
    try {
        const data = await Card.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Card: ' + error.message);
    }
};

export const getCardByIdService = async (id) => {
    try {
        const data = await Card.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Card không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Card: ' + error.message);
    }
};

export const getAllCardService = async () => {
    try {
        const dataList = await Card.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi Card: ' + error.message);
    }
};

export const updateCardService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await Card.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Card không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Card: ' + error.message);
    }
};

export const deleteCardService = async (ids) => {
    try {
        const dataList = await Card.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Card nào tồn tại với các ID này');
        }
        await Card.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi Card đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Card: ' + error.message);
    }
};

