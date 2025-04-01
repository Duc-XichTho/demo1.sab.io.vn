import {PMVSettingKH} from '../postgres/postgres.js';

export const createPMVSettingKHService = async (newData) => {
    try {
        const pmvSettingItem = PMVSettingKH.findOne({
            where: {
                name: newData.name
            }
        });
        if (pmvSettingItem) {
            PMVSettingKH.destroy({
                where: {
                    name: newData.name
                }
            });
        }
        const data = await PMVSettingKH.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PMVSettingKH: ' + error.message);
    }
};

export const getPMVSettingKHByIdService = async (id) => {
    try {
        const data = await PMVSettingKH.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVSettingKH không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PMVSettingKH: ' + error.message);
    }
};

export const getAllPMVSettingKHService = async () => {
    try {
        const dataList = await PMVSettingKH.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PMVSettingKH: ' + error.message);
    }
};

export const updatePMVSettingKHService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PMVSettingKH.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PMVSettingKH không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PMVSettingKH: ' + error.message);
    }
};

export const deletePMVSettingKHService = async (ids) => {
    try {
        const dataList = await PMVSettingKH.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PMVSettingKH nào tồn tại với các ID này');
        }
        await PMVSettingKH.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PMVSettingKH đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PMVSettingKH: ' + error.message);
    }
};

