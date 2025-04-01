import { SoQuanLyTaiSan } from "../postgres/postgres.js";

// GET
export const getAllSoQuanLyTaiSanService = async () => {
    try {
        const dataList = await SoQuanLyTaiSan.findAll({
            order: [['id', 'DESC']],
            where: {
                show: true,
            }
        });
        return dataList;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi SoQuanLyTaiSan: ' + error.message);
    }
};

// CREATE
export const createSoQuanLyTaiSanService = async (newData) => {
    try {
        const data = await SoQuanLyTaiSan.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi SoQuanLyTaiSan: ' + error.message);
    };
};

// UPDATE
export const updateSoQuanLyTaiSanService = async (newData) => {
    const { id } = newData;
    try {
        const data = await SoQuanLyTaiSan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi SoQuanLyTaiSan không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi SoQuanLyTaiSan: ' + error.message);
    };
};

// DELETE
export const deleteSoQuanLyTaiSanService = async (id) => {
    try {
        const dataList = await SoQuanLyTaiSan.update(
            { show: false },
            {
                where: {
                    id
                }
            }
        );
        return dataList;
    } catch (error) {
        throw new Error('Lỗi khi ẩn bản ghi SoQuanLyTaiSan: ' + error.message);
    }
};