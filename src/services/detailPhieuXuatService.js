import {DetailPhieuXuat, HangHoa, Kho, Lo, PhieuXuat} from '../postgres/postgres.js';

export const getFullDetailPhieuXuatService = async () => {
    try {
        const detailPhieuXuatRecords = await DetailPhieuXuat.findAll({
            where: { show: true },
            raw: true,
        });

        const phieuXuatRecords = await PhieuXuat.findAll({ raw: true });
        const hangHoaRecords = await HangHoa.findAll({ raw: true });
        const loRecords = await Lo.findAll({ raw: true });
        const khoRecords = await Kho.findAll({ raw: true });

        const result = detailPhieuXuatRecords.map((detail) => {
            const phieuXuat = phieuXuatRecords.find((px) => px.id === detail.id_phieu_xuat);
            const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
            const lo = loRecords.find((l) => l.id === detail.id_lo);
            const kho = khoRecords.find((k) => k.id === detail.id_kho);

            return {
                id: detail.id,
                phieu_lq: phieuXuat ? phieuXuat.phieu_lq : null,
                ngay_xuat: phieuXuat ? phieuXuat.ngay : null,
                code: hangHoa ? hangHoa.code : null,
                lo: lo ? lo.code : null,
                dvt: hangHoa? hangHoa.dvt :null,
                kho: kho ? kho.code : null,
                gia_xuat: detail.gia_xuat || null,
                so_luong: detail.so_luong || null,
                tk_hang_ton: hangHoa.tk_hang_ton || null,
                name: hangHoa ? hangHoa.name : null,
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getFullDetailPhieuXuatService:', error);
        throw error;
    }
}


export const createDetailPhieuXuatService = async (newData) => {
    try {
        const data = await DetailPhieuXuat.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DetailPhieuXuat: ' + error.message);
    }
};

export const getDetailPhieuXuatByPhieuXuatIdService = async (id) => {
    try {
        const data = await DetailPhieuXuat.findAll({
            where: {
                id_phieu_xuat: id,
                show: true
            },
            raw: true
        });
        return data
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DetailPhieuXuat: ' + error.message);
    }
};

export const getAllDetailPhieuXuatService = async () => {
    try {
        const dataList = await DetailPhieuXuat.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DetailPhieuXuat: ' + error.message);
    }
};

export const updateDetailPhieuXuatService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await DetailPhieuXuat.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DetailPhieuXuat không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DetailPhieuXuat: ' + error.message);
    }
};

export const deleteDetailPhieuXuatService = async (ids) => {
    try {
        const dataList = await DetailPhieuXuat.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DetailPhieuXuat nào tồn tại với các ID này');
        }
        await DetailPhieuXuat.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi DetailPhieuXuat đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DetailPhieuXuat: ' + error.message);
    }
};

