import {RuleSetting} from '../postgres/postgres.js';

export const createRuleSettingService = async (newData) => {
    try {
        const data = await RuleSetting.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi RuleSetting: ' + error.message);
    }
};

export const getRuleSettingByIdService = async (id) => {
    try {
        const data = await RuleSetting.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi RuleSetting không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi RuleSetting: ' + error.message);
    }
};

export const getAllRuleSettingService = async () => {
    try {
        const dataList = await RuleSetting.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi RuleSetting: ' + error.message);
    }
};

export const updateRuleSettingService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await RuleSetting.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi RuleSetting không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi RuleSetting: ' + error.message);
    }
};

export const deleteRuleSettingService = async (ids) => {
    try {
        const dataList = await RuleSetting.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi RuleSetting nào tồn tại với các ID này');
        }
        await RuleSetting.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi RuleSetting đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi RuleSetting: ' + error.message);
    }
};

