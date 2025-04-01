import {DetailPhieuNhap, HangHoa, Kho, Lo, NhaCungCap, PhieuNhap} from '../postgres/postgres.js';

export const getFullDetailPhieuNhapService = async () => {
    try {
        const detailPhieuNhapRecords = await DetailPhieuNhap.findAll({
            where: { show: true },
            raw: true,
        });
        const phieuNhapRecords = await PhieuNhap.findAll({
            where: { show: true },
            raw: true,
        });
        const hangHoaRecords = await HangHoa.findAll({
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
        const nccRecords = await NhaCungCap.findAll({
            where: { show: true },
            raw: true,
        });

        const result = detailPhieuNhapRecords.map((detail) => {
            const phieuNhap = phieuNhapRecords.find((pn) => pn.id === detail.id_phieu_nhap);
            const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
            const lo = loRecords.find((l) => l.id === detail.id_lo);
            const kho = khoRecords.find((k) => k.id === detail.id_kho);
            const ncc = nccRecords.find((k) => k.id === detail.id_nha_cung_cap);
            return {
                id: detail.id,
                ngay_nhap: phieuNhap ? phieuNhap.ngay : null,
                code: hangHoa ? hangHoa.code : null,
                name: hangHoa ? hangHoa.name : null,
                dvt: hangHoa? hangHoa.dvt :null,
                lo: lo ? lo.code : null,
                kho: kho ? kho.code : null,
                nha_cung_cap: ncc ? ncc : null,
                gia_nhap: detail.gia_nhap || null,
                so_luong: detail.so_luong || null,
                tk_hang_ton: hangHoa.tk_hang_ton || null,
            };
        });

        return result
    } catch (error) {
        console.error('Error in getFullDetailPhieuNhapService:', error);
        throw error;
    }
};



export const createDetailPhieuNhapService = async (newData) => {
    try {
        const data = await DetailPhieuNhap.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DetailPhieuNhap: ' + error.message);
    }
};

export const getAllDetailPhieuNhapByPhieuNhapIdService = async (id) => {
    try {
        const data = await DetailPhieuNhap.findAll({
            where: {
                id_phieu_nhap: id,
                show: true
            },
            raw: true
        });
        return data
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DetailPhieuNhap: ' + error.message);
    }
}

export const getDetailPhieuNhapByIdService = async (id) => {
    try {
        const data = await DetailPhieuNhap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DetailPhieuNhap không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DetailPhieuNhap: ' + error.message);
    }
};

export const getAllDetailPhieuNhapService = async () => {
    try {
        const dataList = await DetailPhieuNhap.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DetailPhieuNhap: ' + error.message);
    }
};

export const updateDetailPhieuNhapService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await DetailPhieuNhap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DetailPhieuNhap không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DetailPhieuNhap: ' + error.message);
    }
};

export const deleteDetailPhieuNhapService = async (ids) => {
    try {
        const dataList = await DetailPhieuNhap.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DetailPhieuNhap nào tồn tại với các ID này');
        }
        await DetailPhieuNhap.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi DetailPhieuNhap đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DetailPhieuNhap: ' + error.message);
    }
};

