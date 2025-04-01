import {SettingGroup} from '../postgres/postgres.js';

export const createSettingGroupService = async (newData) => {
    try {
        const data = await SettingGroup.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi SettingGroup: ' + error.message);
    }
};

export const getSettingGroupByIdService = async (id) => {
    try {
        const data = await SettingGroup.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SettingGroup không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi SettingGroup: ' + error.message);
    }
};

export const getAllSettingGroupService = async () => {
    try {
        const dataList = await SettingGroup.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi SettingGroup: ' + error.message);
    }
};

export const updateSettingGroupService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await SettingGroup.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SettingGroup không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi SettingGroup: ' + error.message);
    }
};

export const deleteSettingGroupService = async (ids) => {
    try {
        const dataList = await SettingGroup.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi SettingGroup nào tồn tại với các ID này');
        }
        await SettingGroup.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi SettingGroup đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi SettingGroup: ' + error.message);
    }
};

