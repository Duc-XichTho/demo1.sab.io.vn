import {
    TamUngDetail,
    HangHoa,
    HoaDon,
    KhachHang,
    Kho,
    Lo,
    NhanVien,
    TamUng,
    Kmf,
    Kmtc,
    DuAn,
    BusinessUnit,
    DonMuaHang,
    PhongBan
} from '../postgres/postgres.js';
import {
    getDonMuaHangByCodeService
} from "./donMuaHangService.js";

export const getTamUngByCardIdService = async (id) => {
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
        const tamUngRecords = await TamUng.findAll({
            where: whereCondition,
            raw: true
        });

        const tamUngDetailRecords = await TamUngDetail.findAll({
            where: {
                show: true
            },
            raw: true
        });
        const hangHoaRecords = await HangHoa.findAll({
            where: {
                show: true
            },
            raw: true
        });
        const kmfRecords = await Kmf.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const kmnsRecords = await Kmtc.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const duAnRecords = await DuAn.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const buRecords = await BusinessUnit.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const nhanVienRecords = await NhanVien.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const boPhanRecords = await BusinessUnit.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const deNghiMuaRecords = await DonMuaHang.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const result = tamUngRecords.map((tamUng) => {
            // Use filter instead of find for tamUngDetail
            const tamUngDetailList = tamUngDetailRecords.filter((detail) => detail.id_tam_ung === tamUng.id);
            const ddn = deNghiMuaRecords?.find((ddn) => ddn.id === tamUng.id_de_nghi_mua);
            const nhanVien = nhanVienRecords.find((nv) => nv.id === tamUng.id_nhan_vien);
            const boPhan = boPhanRecords.find((bp) => bp.id === tamUng.id_bo_phan);


            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = tamUngDetailList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kmf = kmfRecords.find((km) => km.id === detail.id_kmf);
                const kmns = kmnsRecords.find((km) => km.id === detail.id_kmns);
                const duan = duAnRecords.find((vv) => vv.id === detail.id_vu_viec);
                const bu = buRecords.find((bu) => bu.id === detail.id_BU);


                return {
                    id: detail.id_hang_hoa,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    kmf_code: kmf ? kmf.code : null,
                    kmf_name: kmf ? kmf.name : null,
                    kmf_full: kmf ? kmf.code + ' | ' + kmf.name : null,
                    kmns_code: kmns ? kmns.code : null,
                    kmns_name: kmns ? kmns.name : null,
                    kmns_full: kmns ? kmns.code + ' | ' + kmns.name : null,
                    vuviec_code: duan ? duan.code : null,
                    vuviec_name: duan ? duan.name : null,
                    vuviec_full: duan ? duan.code + ' | ' + duan.name : null,
                    bu_code: bu ? bu.code : null,
                    bu_name: bu ? bu.name : null,
                    bu_full: bu ? bu.code + ' | ' + bu.name : null,
                    so_luong: detail.so_luong,
                    don_gia: detail.don_gia || 0,
                    tong_tien: detail.so_luong * (detail.don_gia || 0),
                    thue: detail.thue,
                };
            });


            return {
                id: tamUng.id,
                phieu_lq: tamUng.phieu_lq,
                code: tamUng.code,
                trang_thai: tamUng.trang_thai,
                de_nghi_mua: ddn,
                nhan_vien: nhanVien,
                bo_phan: boPhan,
                ngay_du_kien_tam_ung: tamUng ? tamUng.ngay_du_kien_tam_ung : null,
                ngay_du_kien_hoan_ung: tamUng ? tamUng.ngay_du_kien_hoan_ung : null,
                mo_ta: tamUng ? tamUng.mo_ta : null,
                tk_nhan_tien: tamUng ? tamUng.tk_nhan_tien : null,
                tong_tien: danh_sach_hang_hoa.reduce((sum, item) => sum + (item.tong_tien || 0), 0),
                danh_sach_hang_hoa
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getTamUngByCardIdService:', error);
        throw error;
    }
}

export const createTamUngService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await TamUng.max('id')) + 1 || 1;

        newData.code = `PTU/${1000 + nextId}/${currentYear}`;

        const data = await TamUng.create(newData);
        return data;

    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi TamUng: ' + error.message);
    }
};

export const getTamUngByIdService = async (id) => {
    try {
        const data = await TamUng.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TamUng không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi TamUng: ' + error.message);
    }
};

export const getAllTamUngService = async () => {
    try {
        const tamUngRecords = await TamUng.findAll({
            where: {show: true}, raw: true, order: [['id', 'DESC']],

        });
        const tamUngDetailRecords = await TamUngDetail.findAll({where: {show: true}, raw: true});
        const hangHoaRecords = await HangHoa.findAll({where: {show: true}, raw: true});
        const kmfRecords = await Kmf.findAll({where: {show: true}, raw: true})
        const kmnsRecords = await Kmtc.findAll({where: {show: true}, raw: true})
        const duAnRecords = await DuAn.findAll({where: {show: true}, raw: true})
        const boPhanRecords = await BusinessUnit.findAll({where: {show: true}, raw: true})
        const nhanVienRecords = await NhanVien.findAll({where: {show: true}, raw: true})
        const deNghiMuaRecords = await DonMuaHang.findAll({where: {show: true}, raw: true})

        const result = tamUngRecords.map((tamUng) => {
            const tamUngDetailList = tamUngDetailRecords.filter((detail) => detail.id_tam_ung === tamUng.id);
            const deNghiMua = deNghiMuaRecords.find((dnm) => dnm.id === tamUng.id_de_nghi_mua);
            const nhanVien = nhanVienRecords.find((nv) => nv.id === tamUng.id_nhan_vien);
            const boPhan = boPhanRecords.find((bp) => bp.id === tamUng.id_bo_phan);

            const chi_tiet_tam_ung = tamUngDetailList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kmf = kmfRecords.find((km) => km.id === detail.id_kmf);
                const kmns = kmnsRecords.find((km) => km.id === detail.id_kmns);
                const vuViec = duAnRecords.find((vv) => vv.id === detail.id_vu_viec);
                const bu = boPhanRecords.find((bu) => bu.id === detail.id_BU);

                return {
                    id_hang_hoa: detail.id_hang_hoa,
                    code_hang_hoa: hangHoa ? hangHoa.code : null,
                    name_hang_hoa: hangHoa ? hangHoa.name : null,
                    gia_ban: hangHoa ? hangHoa.gia_ban : null,
                    don_gia: detail ? detail.don_gia : null,
                    so_luong: detail.so_luong,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    thue: detail.thue,
                    tong_tien: detail.so_luong * detail.don_gia,
                    code_kmf: kmf ? kmf.code : null,
                    name_kmf: kmf ? kmf.name : null,
                    code_kmns: kmns ? kmns.code : null,
                    name_kmns: kmns ? kmns.name : null,
                    code_vu_viec: vuViec ? vuViec.code : null,
                    name_vu_viec: vuViec ? vuViec.name : null,
                    code_bo_phan: bu ? bu.code : null,
                    name_bo_phan: bu ? bu.name : null,
                }
            })

            return {
                id: tamUng.id,
                code: tamUng.code,
                id_card_create: tamUng.id_card_create,
                trang_thai: tamUng.trang_thai,
                de_nghi_mua: deNghiMua,
                nhan_vien: nhanVien,
                name_nhan_vien: nhanVien ? nhanVien.name : null,
                code_nhan_vien: nhanVien ? nhanVien.code : null,
                bo_phan: boPhan,
                phieu_lq: tamUng.phieu_lq,
                ngay_du_kien_tam_ung: tamUng ? tamUng.ngay_du_kien_tam_ung : null,
                ngay_du_kien_hoan_ung: tamUng ? tamUng.ngay_du_kien_hoan_ung : null,
                mo_ta: tamUng ? tamUng.mo_ta : null,
                tk_nhan_tien: tamUng ? tamUng.tk_nhan_tien : null,
                company: tamUng ? tamUng.company : null,
                chi_tiet_tam_ung,
                created_at: tamUng ? tamUng.created_at : null,
                updated_at: tamUng ? tamUng.updated_at : null,
                deleted_at: tamUng ? tamUng.created_by : null,
                user_create: tamUng ? tamUng.user_create : null,
                user_update: tamUng ? tamUng.user_update : null,
                user_delete: tamUng ? tamUng.user_delete : null,
                tong_tien: chi_tiet_tam_ung.reduce((sum, item) => sum + (item.tong_tien || 0), 0),
            };
        });

        return result;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi TamUng: ' + error.message);
    }
};

export const updateTamUngService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await TamUng.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi TamUng không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi TamUng: ' + error.message);
    }
};

export const deleteTamUngService = async (ids) => {
    try {
        const dataList = await TamUng.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi TamUng nào tồn tại với các ID này');
        }
        await TamUng.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi TamUng đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi TamUng: ' + error.message);
    }
};
