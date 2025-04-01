import {KTQTSoKeToan, KTQTUnit} from '../postgres/postgres.js';

export const createKTQTUnitService = async (newData) => {
    try {
        const data = await KTQTUnit.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KTQTUnit: ' + error.message);
    }
};

export const getKTQTUnitByIdService = async (id) => {
    try {
        const data = await KTQTUnit.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KTQTUnit không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KTQTUnit: ' + error.message);
    }
};

export const getAllKTQTUnitService = async () => {
    try {
        const dataList = await KTQTUnit.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KTQTUnit: ' + error.message);
    }
};

export const updateKTQTUnitService = async (newData) => {
    const {id, oldValue, code} = newData;
    try {
        const data = await KTQTUnit.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KTQTUnit không tồn tại');
        }
        await data.update(newData)
        //     .then(() => {
        //     fetchAndUpdateRecords(oldValue, code)
        // });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KTQTUnit: ' + error.message);
    }
};

export const deleteKTQTUnitService = async (ids) => {
    try {
        const dataList = await KTQTUnit.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KTQTUnit nào tồn tại với các ID này');
        }
        await KTQTUnit.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi KTQTUnit đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KTQTUnit: ' + error.message);
    }
};

const fetchAndUpdateRecords = async (oldValue, code) => {
    try {
        let soKeToanList = await KTQTSoKeToan.findAll({where: {KTQTUnit_code: oldValue}});
        await Promise.all(
            soKeToanList.map(record => record.update({KTQTUnit_code: code}))
        );
        return soKeToanList
    } catch (error) {
        throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
    }
};