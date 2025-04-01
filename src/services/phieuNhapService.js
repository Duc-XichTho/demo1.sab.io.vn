import {DetailPhieuNhap, HangHoa, HoaDon, Kho, Lo, NhaCungCap, NhanVien, PhieuNhap} from '../postgres/postgres.js';
import {Op} from "sequelize";

export const createPhieuNhapService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await PhieuNhap.max('id')) + 1 || 1;

        newData.code = `PNK/${1000 + nextId}/${currentYear}`;

        const data = await PhieuNhap.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PhieuNhap: ' + error.message);
    }
};

export const getPhieuNhapByIdService = async (id) => {
    try {
        const data = await PhieuNhap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuNhap không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PhieuNhap: ' + error.message);
    }
};

export const getAllPhieuNhapService = async () => {
    try {
        const dataList = await PhieuNhap.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            },
            order: [['id', 'DESC']],
        });;
        const updatedDataList = await Promise.all(dataList.map(async (item) => {
            const nhanVien = await NhanVien.findOne({
                where: { id: item.id_nhan_vien },
                attributes: ['code', 'name']
            });
            return {
                ...item.toJSON(),
                code_nhan_vien: nhanVien ? `${nhanVien.code}` : null,
                name_nhan_vien: nhanVien ? `${nhanVien.name}` : null,
            };
        }));
        return updatedDataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi PhieuNhap: ' + error.message);
    }
};

export const updatePhieuNhapService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await PhieuNhap.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuNhap không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PhieuNhap: ' + error.message);
    }
};

export const deletePhieuNhapService = async (ids) => {
    try {
        const dataList = await PhieuNhap.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PhieuNhap nào tồn tại với các ID này');
        }
        await PhieuNhap.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi PhieuNhap đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PhieuNhap: ' + error.message);
    }
};

export const getPhieuNhapByCardIdService = async (id) => {
    try {
        const isNumeric = /^\d+$/.test(id);

        let whereCondition = {
            show: true
        };

        if (isNumeric) {
            whereCondition.id_card_create = id
        } else {
            whereCondition.id = parseInt(id.slice(1), 10);
        }
        const phieuNhapRecords = await PhieuNhap.findAll({
            where: whereCondition,
            raw: true
        });

        const detailPhieuNhapRecords = await DetailPhieuNhap.findAll({where: {show: true}, raw: true});
        const hangHoaRecords = await HangHoa.findAll({where: {show: true}, raw: true});
        const nhanVienRecords = await NhanVien.findAll({where: {show: true}, raw: true})
        const khoRecords = await Kho.findAll({where: {show: true}, raw: true})
        const loRecords = await Lo.findAll({where: {show: true}, raw: true})
        const nccRecords = await NhaCungCap.findAll({where: {show: true}, raw: true})

        const result = phieuNhapRecords.map((phieuNhap) => {
            const detailPhieuNhapList = detailPhieuNhapRecords.filter((detail) => detail.id_phieu_nhap === phieuNhap.id);
            const nhanVien = nhanVienRecords.find((nv) => nv.id === phieuNhap.id_nhan_vien);


            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = detailPhieuNhapList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kho = khoRecords.find((k) => k.id === detail.id_kho);
                const lo = loRecords.find((l) => l.id === detail.id_lo);

                const ncc = nccRecords.find(ncc => ncc.id == detail.id_nha_cung_cap)

                return {
                    id: detail.id,
                    id_hang_hoa: detail.id_hang_hoa,
                    hh_code: hangHoa ? hangHoa.code : null,
                    hh_name: hangHoa ? hangHoa.name : null,
                    hh_full: hangHoa ? hangHoa.code + ' | ' + hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    kho,
                    lo,
                    nha_cung_cap: ncc,
                    so_luong: detail.so_luong || 0,
                    gia_nhap: detail ? detail.gia_nhap : null,
                    tong_tien: detail.tong_tien || 0,

                };
            });


            return {
                id: phieuNhap.id,
                phieu_lq: phieuNhap.phieu_lq,
                code: phieuNhap.code,
                trang_thai: phieuNhap.trang_thai,
                nhan_vien: nhanVien,
                ngay: phieuNhap ? phieuNhap.ngay : null,
                nhom_hang_hoa: phieuNhap ? phieuNhap.nhom_hang_hoa : null,
                id_DNTT: phieuNhap ? phieuNhap.id_DNTT : null,
                danh_sach_hang_hoa
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getPhieuNhapByCardIdService:', error);
        throw error;
    }
}
