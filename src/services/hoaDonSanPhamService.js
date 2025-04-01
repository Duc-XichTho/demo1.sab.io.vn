import {
    HoaDonSanPham
} from "../postgres/postgres.js";

// GET
export const getAllHoaDonSanPhamByHoaDonId = async (id) => {
    try {
        const dataList = await HoaDonSanPham.findAll({
            where: {
                orderId: id
            },
            order: [
                ['id', 'ASC']
            ]
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HoaDonSanPham: ' + error.message);
    }
}

// CREATE
export const createHoaDonSanPham = async (newData) => {
    try {
        const data = await HoaDonSanPham.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HoaDonSanPham: ' + error.message);
    }
};