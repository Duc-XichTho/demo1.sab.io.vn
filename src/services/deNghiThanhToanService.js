import {
    BusinessUnit,
    DeNghiThanhToan,
    DeNghiThanhToanDetail,
    DonMuaHang,
    DuAn,
    HangHoa,
    Kmf,
    Kmtc,
    NhanVien,
    TamUng
} from '../postgres/postgres.js';

export const getDeNghiThanhToanByCardIdService = async (id) => {
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
        const deNghiThanhToanRecords = await DeNghiThanhToan.findAll({
            where: whereCondition,
            raw: true
        });

        const deNghiThanhToanDetailRecords = await DeNghiThanhToanDetail.findAll({
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
        const deNghiMuaRecords = await DonMuaHang.findAll({
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
        const tamUngRecords = await TamUng.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const result = deNghiThanhToanRecords.map((deNghiThanhToan) => {
            // Use filter instead of find for deNghiThanhToanDetail
            const deNghiThanhToanDetailList = deNghiThanhToanDetailRecords.filter((detail) => detail.id_DNTT === deNghiThanhToan.id);
            const ddn = deNghiMuaRecords.find((ddn) => ddn.code === deNghiThanhToan.id_de_nghi_mua);
            const tu = tamUngRecords.find((tu) => tu.id === deNghiThanhToan.id_tam_ung);
            const nhanVien = nhanVienRecords.find((nv) => nv.id === deNghiThanhToan.id_nhan_vien);
            const boPhan = boPhanRecords.find((bp) => bp.id === deNghiThanhToan.id_bo_phan);

            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = deNghiThanhToanDetailList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kmf = kmfRecords.find((km) => km.id === detail.id_kmf);
                const kmns = kmnsRecords.find((km) => km.id === detail.id_kmns);
                const duan = duAnRecords.find((vv) => vv.id === detail.id_vu_viec);
                const bu = buRecords.find((bu) => bu.id === detail.id_BU);


                return {
                    id: detail.id_hang_hoa,
                    hopDong: detail.hopDong,
                    hoaDon: detail.hoaDon,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    kmf_code: kmf ? kmf.code : null,
                    kmf_name: kmf ? kmf.name : null,
                    kmns_code: kmns ? kmns.code : null,
                    kmns_name: kmns ? kmns.name : null,
                    vuviec_code: duan ? duan.code : null,
                    vuviec_name: duan ? duan.name : null,
                    bu_code: bu ? bu.code : null,
                    bu_name: bu ? bu.name : null,
                    so_luong: detail.so_luong,
                    don_gia: detail.don_gia || 0,
                    tong_tien: detail.so_luong * (detail.don_gia || 0),
                    thue: detail.thue,
                };
            });

            return {
                id: deNghiThanhToan.id,
                phieu_lq: deNghiThanhToan.phieu_lq,
                id_card_create: deNghiThanhToan.id_card_create,
                code: deNghiThanhToan.code,
                trang_thai: deNghiThanhToan.trang_thai,
                de_nghi_mua: ddn,
                tam_ung: tu,
                nhan_vien: nhanVien,
                bo_phan: boPhan,
                ngay_du_kien_thanh_toan: deNghiThanhToan ? deNghiThanhToan.ngay_du_kien_thanh_toan : null,
                tong_tien: danh_sach_hang_hoa.reduce((sum, item) => sum + (item.tong_tien || 0), 0),
                mo_ta: deNghiThanhToan ? deNghiThanhToan.mo_ta : null,
                tk_nhan_tien: deNghiThanhToan ? deNghiThanhToan.tk_nhan_tien : null,
                danh_sach_hang_hoa,
                tien_nguyen_te: deNghiThanhToan.tien_nguyen_te,
                ty_gia: deNghiThanhToan.ty_gia
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getDeNghiThanhToanByCardIdService:', error);
        throw error;
    }
}

export const getDeNghiThanhToanNewService = async () => {
    try {
        const deNghiThanhToanRecords = await DeNghiThanhToan.findAll({
            where: {
                show: true
            },
            raw: true
        });

        const deNghiThanhToanDetailRecords = await DeNghiThanhToanDetail.findAll({
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
        const deNghiMuaRecords = await DonMuaHang.findAll({
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
        const tamUngRecords = await TamUng.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const result = deNghiThanhToanRecords.map((deNghiThanhToan) => {
            // Use filter instead of find for deNghiThanhToanDetail
            const deNghiThanhToanDetailList = deNghiThanhToanDetailRecords.filter((detail) => detail.id_DNTT === deNghiThanhToan.id);
            const ddn = deNghiMuaRecords.find((ddn) => ddn.code === deNghiThanhToan.id_de_nghi_mua);
            const tu = tamUngRecords.find((tu) => tu.id === deNghiThanhToan.id_tam_ung);
            const nhanVien = nhanVienRecords.find((nv) => nv.id === deNghiThanhToan.id_nhan_vien);
            const boPhan = boPhanRecords.find((bp) => bp.id === deNghiThanhToan.id_bo_phan);

            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = deNghiThanhToanDetailList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kmf = kmfRecords.find((km) => km.id === detail.id_kmf);
                const kmns = kmnsRecords.find((km) => km.id === detail.id_kmns);
                const duan = duAnRecords.find((vv) => vv.id === detail.id_vu_viec);
                const bu = buRecords.find((bu) => bu.id === detail.id_BU);


                return {
                    id: detail.id_hang_hoa,
                    hopDong: detail.hopDong,
                    hoaDon: detail.hoaDon,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    kmf_code: kmf ? kmf.code : null,
                    kmf_name: kmf ? kmf.name : null,
                    kmns_code: kmns ? kmns.code : null,
                    kmns_name: kmns ? kmns.name : null,
                    vuviec_code: duan ? duan.code : null,
                    vuviec_name: duan ? duan.name : null,
                    bu_code: bu ? bu.code : null,
                    bu_name: bu ? bu.name : null,
                    so_luong: detail.so_luong,
                    don_gia: detail.don_gia || 0,
                    tong_tien: detail.so_luong * (detail.don_gia || 0),
                    thue: detail.thue,
                };
            });

            return {
                id: deNghiThanhToan.id,
                phieu_lq: deNghiThanhToan.phieu_lq,
                code: deNghiThanhToan.code,
                trang_thai: deNghiThanhToan.trang_thai,
                de_nghi_mua: ddn,
                tam_ung: tu,
                nhan_vien: nhanVien,
                bo_phan: boPhan,
                ngay_du_kien_thanh_toan: deNghiThanhToan ? deNghiThanhToan.ngay_du_kien_thanh_toan : null,
                tong_tien: danh_sach_hang_hoa.reduce((sum, item) => sum + (item.tong_tien || 0), 0),
                mo_ta: deNghiThanhToan ? deNghiThanhToan.mo_ta : null,
                tk_nhan_tien: deNghiThanhToan ? deNghiThanhToan.tk_nhan_tien : null,
                danh_sach_hang_hoa
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getDeNghiThanhToanByCardIdService:', error);
        throw error;
    }
}

export const createDeNghiThanhToanService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await DeNghiThanhToan.max('id')) + 1 || 1;

        newData.code = `DTT/${1000 + nextId}/${currentYear}`;

        const data = await DeNghiThanhToan.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi DeNghiThanhToan: ' + error.message);
    }
};

export const getDeNghiThanhToanByIdService = async (id) => {
    try {
        const data = await DeNghiThanhToan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DeNghiThanhToan không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi DeNghiThanhToan: ' + error.message);
    }
};

export const getAllDeNghiThanhToanService = async () => {
    try {
        const deNghiThanhToanRecords = await DeNghiThanhToan.findAll({
            where: {
                show: true
            },
            order: [['id', 'DESC']],
            raw: true
        });

        const deNghiThanhToanDetailRecords = await DeNghiThanhToanDetail.findAll({
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
        const deNghiMuaRecords = await DonMuaHang.findAll({
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
        const tamUngRecords = await TamUng.findAll({
            where: {
                show: true
            },
            raw: true
        })
        const result = deNghiThanhToanRecords.map((deNghiThanhToan) => {
            // Use filter instead of find for deNghiThanhToanDetail
            const deNghiThanhToanDetailList = deNghiThanhToanDetailRecords.filter((detail) => detail.id_DNTT === deNghiThanhToan.id);
            const ddn = deNghiMuaRecords.find((ddn) => ddn.id === deNghiThanhToan.id_de_nghi_mua);
            const tu = tamUngRecords.find((tu) => tu.id === deNghiThanhToan.id_tam_ung);
            const nhanVien = nhanVienRecords.find((nv) => nv.id === deNghiThanhToan.id_nhan_vien);
            const boPhan = boPhanRecords.find((bp) => bp.id === deNghiThanhToan.id_bo_phan);

            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = deNghiThanhToanDetailList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const kmf = kmfRecords.find((km) => km.id === detail.id_kmf);
                const kmns = kmnsRecords.find((km) => km.id === detail.id_kmns);
                const duan = duAnRecords.find((vv) => vv.id === detail.id_vu_viec);
                const bu = buRecords.find((bu) => bu.id === detail.id_BU);


                return {
                    id: detail.id_hang_hoa,
                    hopDong: detail.hopDong,
                    hoaDon: detail.hoaDon,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    kmf_code: kmf ? kmf.code : null,
                    kmf_name: kmf ? kmf.name : null,
                    kmns_code: kmns ? kmns.code : null,
                    kmns_name: kmns ? kmns.name : null,
                    vuviec_code: duan ? duan.code : null,
                    vuviec_name: duan ? duan.name : null,
                    bu_code: bu ? bu.code : null,
                    bu_name: bu ? bu.name : null,
                    so_luong: detail.so_luong,
                    don_gia: detail.don_gia || 0,
                    tong_tien: detail.so_luong * (detail.don_gia || 0),
                    thue: detail.thue,
                };
            });

            return {
                id: deNghiThanhToan.id,
                created_at : deNghiThanhToan.created_at,
                phieu_lq: deNghiThanhToan.phieu_lq,
                id_card_create: deNghiThanhToan.id_card_create,
                code: deNghiThanhToan.code,
                trang_thai: deNghiThanhToan.trang_thai,
                de_nghi_mua: ddn,
                tam_ung: tu,
                nhan_vien: nhanVien,
                name_nhan_vien: nhanVien ? nhanVien.name : null,
                code_nhan_vien: nhanVien ? nhanVien.code : null,
                bo_phan: boPhan,
                ngay_du_kien_thanh_toan: deNghiThanhToan ? deNghiThanhToan.ngay_du_kien_thanh_toan : null,
                tong_tien: danh_sach_hang_hoa.reduce((sum, item) => sum + (item.tong_tien || 0), 0),
                mo_ta: deNghiThanhToan ? deNghiThanhToan.mo_ta : null,
                tk_nhan_tien: deNghiThanhToan ? deNghiThanhToan.tk_nhan_tien : null,
                danh_sach_hang_hoa
            };
        });

        return result;

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi DeNghiThanhToan: ' + error.message);
    }
};

export const updateDeNghiThanhToanService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await DeNghiThanhToan.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi DeNghiThanhToan không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi DeNghiThanhToan: ' + error.message);
    }
};

export const deleteDeNghiThanhToanService = async (ids) => {
    try {
        const dataList = await DeNghiThanhToan.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi DeNghiThanhToan nào tồn tại với các ID này');
        }
        await DeNghiThanhToan.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi DeNghiThanhToan đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi DeNghiThanhToan: ' + error.message);
    }
};

export const getAllDeNghiThanhToanByTamUngIdService = async (id) => {
    try {

        const deNghiThanhToanRecords = await DeNghiThanhToan.findAll(
            {
                where: {
                    id_tam_ung: id,
                    show: true,
                },
                raw: true
            });
        const deNghiThanhToanDetailRecords = await DeNghiThanhToanDetail.findAll({where: {show: true,}, raw: true});

        const result = deNghiThanhToanRecords.map((deNghiThanhToan) => {
            // Use filter instead of find for deNghiThanhToanDetail
            const deNghiThanhToanDetailList = deNghiThanhToanDetailRecords.filter((detail) => detail.id_DNTT === deNghiThanhToan.id);


            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = deNghiThanhToanDetailList.map((detail) => {


                return {
                    so_luong: detail.so_luong || 0,
                    don_gia: detail.don_gia || 0,
                    tong_tien: (detail.so_luong || 0) * (detail.don_gia || 0) * (1 + (detail.thue || 0 / 100)),
                    thue: detail.thue || 0,
                };
            });

            return {
                id: deNghiThanhToan.id,
                phieu_lq: deNghiThanhToan.phieu_lq,
                trang_thai: deNghiThanhToan.trang_thai,
                ngay_du_kien_thanh_toan: deNghiThanhToan ? deNghiThanhToan.ngay_du_kien_thanh_toan : null,
                tong_tien: danh_sach_hang_hoa.reduce((sum, item) => sum + (item.tong_tien || 0), 0),
                mo_ta: deNghiThanhToan ? deNghiThanhToan.mo_ta : null,
                tk_nhan_tien: deNghiThanhToan ? deNghiThanhToan.tk_nhan_tien : null,
            };
        });
        return result
    } catch (error) {
        console.log(error)
        throw new Error('Lỗi khi lấy bản ghi DeNghiThanhToan: ' + error);

    }
};
