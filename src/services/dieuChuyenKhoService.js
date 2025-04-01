import {
    DetailPhieuXuat,
    DieuChuyenKho,
    HangHoa, HoaDon,
    KhachHang,
    Kho,
    Lo,
    NhanVien,
    PhieuXuat
} from '../postgres/postgres.js';
import {getPhieuNhapByCardIdService} from "./phieuNhapService.js";
import {getPhieuGiaoHangByCardIdService} from "./phieuGiaoHangService.js";
import {getAllKhoService} from "./khoService.js";
import {Op} from "sequelize";

export const getPhieuXuatByCardIdForDCKService = async (id) => {
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
        const phieuXuatRecords = await PhieuXuat.findAll({
            whereCondition,
            raw: true
        });
        const detailPhieuXuatRecords = await DetailPhieuXuat.findAll({where: {show: true}, raw: true});
        const hangHoaRecords = await HangHoa.findAll({where: {show: true}, raw: true});
        const loRecords = await Lo.findAll({where: {show: true}, raw: true});
        const khoRecords = await Kho.findAll({where: {show: true}, raw: true});
        const nhanvienRecords = await NhanVien.findAll({where: {show: true}, raw: true});
        const khachhangRecords = await KhachHang.findAll({where: {show: true}, raw: true});
        const phieuGiaoHangRecord = await getPhieuGiaoHangByCardIdService(id);

        const result = phieuXuatRecords.map((phieuXuat) => {
            // Use filter instead of find for detailPhieuXuat
            const detailPhieuXuatList = detailPhieuXuatRecords.filter((detail) => detail.id_phieu_xuat === phieuXuat.id);
            const phieu_giao_hang = []
            phieuGiaoHangRecord.forEach(pgh => {
                pgh.list_id_phieu_xuat.forEach(idPX => {
                    if (idPX == phieuXuat.id) {
                        phieu_giao_hang.push(`PGH ${pgh.id}`)
                    }
                })
            })
            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = detailPhieuXuatList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const lo = loRecords.find((l) => l.id === detail.id_lo);
                const kho = khoRecords.find((k) => k.id === detail.id_kho);

                return {
                    id: detail.id_hang_hoa,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    lo_code: lo ? lo.code : null,
                    lo_name: lo ? lo.name : null,
                    kho_code: kho ? kho.code : null,
                    kho_name: kho ? kho.name : null,
                    so_luong: detail.so_luong,
                    gia_xuat: detail.gia_xuat,
                };
            });

            // Find related records for nhanvien and khachhang
            const nhanvien = nhanvienRecords.find((nv) => nv.id === phieuXuat.id_nhan_vien);
            const khachhang = khachhangRecords.find((kh) => kh.id === phieuXuat.id_khach_hang);

            return {
                id_phieu_xuat: phieuXuat.id,
                phieu_lq: phieuXuat.phieu_lq,
                id_card_create: phieuXuat.id_card_create,
                code: phieuXuat.code,
                gom: phieuXuat.gom,
                ngay_xuat: phieuXuat ? phieuXuat.ngay : null,
                code_nhan_vien: nhanvien ? nhanvien.code : null,
                name_nhan_vien: nhanvien ? nhanvien.name : null,
                code_khach_hang: khachhang ? khachhang.code : null,
                name_khach_hang: khachhang ? khachhang.name : null,
                don_hang: phieuXuat ? phieuXuat.donHang : null,
                lenh_san_xuat: phieuXuat ? phieuXuat.lenh_san_xuat : null,
                phieu_giao_hang,
                trang_thai: phieuXuat ? phieuXuat.trang_thai : null,
                danh_sach_hang_hoa,
                created_at: phieuXuat.created_at
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getPhieuXuatByCardIdService:', error);
        throw error;
    }
}

export const getDieuChuyenKhoByCardIdService = async (id) => {
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
        const dieuChuyenKho = await DieuChuyenKho.findOne({
            where: whereCondition,
            raw: true
        });

        if (!dieuChuyenKho) {
            return
        }

        const khoNguon = dieuChuyenKho?.id_kho_nguon
            ? await Kho.findOne({ where: { id: dieuChuyenKho.id_kho_nguon }, raw: true })
            : null;

        const khoDich = dieuChuyenKho?.id_kho_dich
            ? await Kho.findOne({ where: { id: dieuChuyenKho.id_kho_dich }, raw: true })
            : null;

        const dieuChuyenKhoRecord = {
            ...dieuChuyenKho,
            kho_nguon: khoNguon,
            kho_dich: khoDich,
        };

        const phieuXuatRecord = await getPhieuXuatByCardIdForDCKService(id);
        const phieuNhapRecord = await getPhieuNhapByCardIdService(id);

        const result = {
            dieuChuyenKhoRecord,
            detail: {
                phieuXuatRecord,
                phieuNhapRecord,
            }
        };

        return result;
    } catch (error) {
        console.error('Error in getDieuChuyenKhoByCardIdService:', error);
        throw error;
    }
}

export const createDieuChuyenKhoService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await DieuChuyenKho.max('id')) + 1 || 1;

        newData.code = `DCK/${1000 + nextId}/${currentYear}`;

        const data = await DieuChuyenKho.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DieuChuyenKho: ' + error.message);
    }
};

export const getDieuChuyenKhoByIdService = async (id) => {
    try {
        const data = await DieuChuyenKho.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DieuChuyenKho không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DieuChuyenKho: ' + error.message);
    }
};

export const getAllDieuChuyenKhoService = async () => {
    try {
        const dataList = await DieuChuyenKho.findAll({
            where: { show: true }
        });

        const updatedDataList = await Promise.all(dataList.map(async (item) => {
            const khoDich = await Kho.findOne({
                where: { id: item.id_kho_dich },
                attributes: ['code', 'name']
            });

            const khoNguon = await Kho.findOne({
                where: { id: item.id_kho_nguon },
                attributes: ['code', 'name']
            });

            return {
                ...item.toJSON(),
                kho_dich: khoDich ? `${khoDich.code} | ${khoDich.name}` : null,
                kho_nguon: khoNguon ? `${khoNguon.code} | ${khoNguon.name}` : null
            };
        }));

        return updatedDataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DieuChuyenKho: ' + error.message);
    }
};


export const updateDieuChuyenKhoService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await DieuChuyenKho.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DieuChuyenKho không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DieuChuyenKho: ' + error.message);
    }
};

export const deleteDieuChuyenKhoService = async (ids) => {
    try {
        const dataList = await DieuChuyenKho.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DieuChuyenKho nào tồn tại với các ID này');
        }
        await DieuChuyenKho.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi DieuChuyenKho đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DieuChuyenKho: ' + error.message);
    }
};

