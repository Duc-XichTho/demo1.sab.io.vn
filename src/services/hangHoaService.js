import { HangHoa, DetailPhieuNhap, DetailPhieuXuat, Lo, Kho } from '../postgres/postgres.js';

export const getAllInfoInventoryService = async () => {
    try {
        const hangHoaRecords = await HangHoa.findAll({
            where: { show: true },
            raw: true,
        });
        const detailPhieuNhapRecords = await DetailPhieuNhap.findAll({
            where: { show: true },
            raw: true,
        });
        const detailPhieuXuatRecords = await DetailPhieuXuat.findAll({
            where: { show: true },
            raw: true,
        });
        const loRecords = await Lo.findAll({
            where: { show: true },
            raw: true,
        });
        const khoRecords = await Kho.findAll({
            where: { show: true },
            raw: true,
        });

        const result = hangHoaRecords.map((hangHoa) => {
            const detailPhieuNhap = detailPhieuNhapRecords.find(
                (detail) => detail.id_hang_hoa === hangHoa.id
            );
            const detailPhieuXuat = detailPhieuXuatRecords.find(
                (detail) => detail.id_hang_hoa === hangHoa.id
            );

            const loId = detailPhieuNhap?.id_lo || detailPhieuXuat?.id_lo;
            const khoId = detailPhieuNhap?.id_kho || detailPhieuXuat?.id_kho;

            const lo = loRecords.find((l) => l.id === loId);
            const kho = khoRecords.find((k) => k.id === khoId);

            return {
                id: hangHoa.id,
                code: hangHoa.code,
                name: hangHoa.name,
                lo: lo ? lo.code : null,
                kho: kho ? kho.code : null,
                so_luong_nhap: detailPhieuNhap ? detailPhieuNhap.so_luong : null,
                so_luong_xuat: detailPhieuXuat ? detailPhieuXuat.so_luong : null,
            };
        });

        return result;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HangHoa: ' + error.message);
    }
};

export const createHangHoaService = async (newData) => {
    try {
        const data = await HangHoa.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HangHoa: ' + error.message);
    }
};

export const getHangHoaByIdService = async (id) => {
    try {
        const data = await HangHoa.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HangHoa không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi HangHoa: ' + error.message);
    }
};

export const getAllHangHoaService = async () => {
    try {
        const dataList = await HangHoa.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HangHoa: ' + error.message);
    }
};

export const updateHangHoaService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await HangHoa.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HangHoa không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi HangHoa: ' + error.message);
    }
};

export const deleteHangHoaService = async (ids) => {
    try {
        const dataList = await HangHoa.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi HangHoa nào tồn tại với các ID này');
        }
        await HangHoa.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi HangHoa đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi HangHoa: ' + error.message);
    }
};

