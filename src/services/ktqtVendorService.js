import {KTQTVendor , KTQTSoKeToan} from '../postgres/postgres.js';

export const createKTQTVendorService = async (newData) => {
    try {
        const data = await KTQTVendor.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi Kmf: ' + error.message);
    }
};

export const getKTQTVendorByIdService = async (id) => {
    try {
        const data = await KTQTVendor.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kmf không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Kmf: ' + error.message);
    }
};

export const getAllKTQTVendorService = async () => {
    try {
        const dataList = await KTQTVendor.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KTQTVendor: ' + error.message);
    }
};

export const updateKTQTVendorService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await KTQTVendor.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Kmf không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi Kmf: ' + error.message);
    }
};

export const deleteKTQTVendorService = async (ids) => {
    try {
        const dataList = await KTQTVendor.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi Kmf nào tồn tại với các ID này');
        }
        await KTQTVendor.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi Kmf đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi Kmf: ' + error.message);
    }
};

const fetchAndUpdateRecords = async (oldValue , name) => {
    try {
        let soKeToanList = await KTQTSoKeToan.findAll({ where: { vender: oldValue }});
        await Promise.all(
            soKeToanList.map(record => record.update({ vender: name }))
        );
        return soKeToanList
    } catch (error) {
        throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
    }
};


