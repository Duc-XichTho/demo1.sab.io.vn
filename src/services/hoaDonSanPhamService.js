import {
    HangHoa, HoaDon,
    HoaDonSanPham
} from "../postgres/postgres.js";

// GET
export const getAllHoaDonSanPhamByHoaDonId = async (id) => {
    try {
        // Lấy danh sách HoaDonSanPham theo orderId
        const dataList = await HoaDonSanPham.findAll({
            where: { orderId: id },
            order: [['id', 'DESC']],
            raw: true
        });

        if (!dataList.length) return [];

        const productIds = [...new Set(dataList.map(item => item.productId))];

        const productList = await HangHoa.findAll({
            where: { id: productIds },
            attributes: ['id', 'gia_ban'],
            raw: true
        });

        const productMap = productList.reduce((acc, product) => {
            acc[product.id] = product.gia_ban;
            return acc;
        }, {});

        const mergedList = dataList.map(item => ({
            ...item,
            gia_ban: productMap[item.productId] || 0,
            tong_tien: Number(item.soLuong) * Number(productMap[item.productId] || 0)
        }));

        return mergedList;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách chi tiết hóa đơn: ' + error.message);
    }
};


// CREATE
export const createHoaDonSanPham = async (newData) => {
    try {
        const data = await HoaDonSanPham.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HoaDonSanPham: ' + error.message);
    }
};

export const updateHoaDonSanPhamService = async (newData) => {
    const {id,} = newData;
    try {
        const data = await HoaDonSanPham.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HoaDon không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi HoaDon: ' + error.message);
    }
};