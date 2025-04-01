import { KTQTProduct, KTQTSoKeToan } from '../postgres/postgres.js';

export const createKTQTProductService = async (newData) => {
    try {
        const data = await KTQTProduct.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi KTQTProduct: ' + error.message);
    }
};

export const getKTQTProductByIdService = async (id) => {
    try {
        const data = await KTQTProduct.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KTQTProduct không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi KTQTProduct: ' + error.message);
    }
};

export const getAllKTQTProductService = async () => {
    try {
        const dataList = await KTQTProduct.findAll();
        return dataList.sort((a, b) => a.id - b.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi KTQTProduct: ' + error.message);
    }
};

export const updateKTQTProductService = async (newData) => {
    const { id, oldValue, code } = newData;
    try {
        const data = await KTQTProduct.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi KTQTProduct không tồn tại');
        }
        await data.update(newData)
        //     .then(() => {
        //     fetchAndUpdateRecords(oldValue, code)
        // });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi KTQTProduct: ' + error.message);
    }
};

export const deleteKTQTProductService = async (ids) => {
    try {
        const dataList = await KTQTProduct.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi KTQTProduct nào tồn tại với các ID này');
        }
        await KTQTProduct.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi KTQTProduct đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi KTQTProduct: ' + error.message);
    }
};
const fetchAndUpdateRecords = async (oldValue, code) => {
    try {
        let soKeToanList = await KTQTSoKeToan.findAll({ where: { KTQTProduct: oldValue } });
        await Promise.all(
            soKeToanList.map(record => record.update({ KTQTProduct: code }))
        );
        return soKeToanList
    } catch (error) {
        throw new Error('Lỗi khi lấy và cập nhật dữ liệu: ' + error.message);
    }
};

