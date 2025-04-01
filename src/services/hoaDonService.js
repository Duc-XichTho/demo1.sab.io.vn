import {
    DonHang,
    HangHoa,
    HoaDon,
    HoaDonSanPham, KhachHang
} from '../postgres/postgres.js';
import {getPhieuThuByCardIdService} from "./phieuThuService.js";
import {Op} from "sequelize";

export const createHoaDonService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await HoaDon.max('id')) + 1 || 1;

        newData.code = `HDB/${1000 + nextId}/${currentYear}`;

        const data = await HoaDon.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi HoaDon: ' + error.message);
    }
};

export const getHoaDonByIdService = async (id) => {
    try {
        const data = await HoaDon.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi HoaDon không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi HoaDon: ' + error.message);
    }
};

export const getHoaDonByCardIdService = async (id) => {
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
        const hoaDonRecords = await HoaDon.findAll({
            where: whereCondition,
            raw: true
        });
        const detailHoaDonRecords = await HoaDonSanPham.findAll({ raw: true});
        const hangHoaRecords = await HangHoa.findAll({where: {show: true}, raw: true});


        const phieuThuRecord = await getPhieuThuByCardIdService(id);

        const result = hoaDonRecords.map((hoaDon) => {

            // Use filter instead of find for detailHoaDon
            const detailHoaDonList = detailHoaDonRecords.filter((detail) => detail.orderId == hoaDon.id);

            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = detailHoaDonList.map((detail) => {

                const hangHoa = hangHoaRecords.find((hh) => hh.id == detail?.productId);

                return {
                    id: detail.productId || null,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    so_luong: detail.soLuong|| null,
                    // gia_xuat: detail.gia_xuat || null,
                    // chiet_khau: detail.chiet_khau|| null,
                    don_gia: hangHoa ? hangHoa.gia_ban : null,
                    // tong_tien: detail.tong_tien || null,
                    thue_gtgt: detail.thue || null,
                    hopDong: detail.hopDong || null,
                };
            });


            return {
                id_hoa_don: hoaDon.id,
                ky_hieu_hd: hoaDon ? hoaDon.ky_hieu_hd : null,
                tong_gia_tri: hoaDon ? hoaDon.tong_gia_tri : null,
                phieu_lq: hoaDon ? hoaDon.phieu_lq : [],
                thue_suat: hoaDon ? hoaDon.thue_suat : null,
                tien_thue: hoaDon ? hoaDon.tien_thue : null,
                id_ncc: hoaDon ? hoaDon.id_ncc : null,
                id_khach_hang: hoaDon ? hoaDon.id_khach_hang : null,
                khach_hang: hoaDon ? hoaDon.khach_hang : null,
                so_chung_tu: hoaDon ? hoaDon.so_chung_tu : null,
                loai: hoaDon ? hoaDon.loai : null,
                mau_so: hoaDon ? hoaDon.mau_so : null,
                so_hoa_don: hoaDon ? hoaDon.so_hoa_don : null,
                tong_gia_tri_chua_thue: hoaDon ? hoaDon.tong_gia_tri_chua_thue : null,
                type: hoaDon ? hoaDon.type : null,
                note: hoaDon ? hoaDon.note : null,
                reminder: hoaDon ? hoaDon.reminder : null,
                email_sent: hoaDon ? hoaDon.email_sent : null,
                list_id_phieu_thu: hoaDon ? hoaDon.list_id_phieu_thu : null,
                trang_thai: hoaDon ? hoaDon.trang_thai : null,
                danh_sach_hang_hoa,
                created_at : hoaDon.created_at

            };
        });

        return result;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi HoaDon: ' + error.message);
    }
};

export const getAllHoaDonService = async () => {
    try {
        const dataList = await HoaDon.findAll({
            where: { show: true },
            order: [['id', 'DESC']],
        });

        const detailHoaDonRecords = await HoaDonSanPham.findAll({ raw: true });
        const hangHoaRecords = await HangHoa.findAll({ where: { show: true }, raw: true });
        const khachHangRecords = await KhachHang.findAll({ raw: true });

        const hoaDonIds = dataList.map(hoaDon => hoaDon.id);
        const sanPhamList = await HoaDonSanPham.findAll({
            where: { orderId: hoaDonIds }
        });

        const result = dataList.map(hoaDon => {
            const detailHoaDonList = detailHoaDonRecords.filter((detail) => detail.orderId == hoaDon.id);
            const danh_sach_hang_hoa = detailHoaDonList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id == detail?.productId);
                return {
                    id: detail.productId || null,
                    code: hangHoa ? hangHoa.code : null,
                    name: hangHoa ? hangHoa.name : null,
                    dvt: hangHoa ? hangHoa.dvt : null,
                    so_luong: detail.soLuong || null,
                    don_gia: hangHoa ? hangHoa.gia_ban : null,
                    thue_gtgt: detail.thue || null,
                    hopDong: detail.hopDong || null,
                };
            });

            const relatedSanPham = sanPhamList.filter(sp => sp.orderId == hoaDon.id);

            // Lấy thông tin khách hàng
            const khachHang = khachHangRecords.find(kh => kh.id == hoaDon.id_khach_hang);

            return {
                ...hoaDon.get({ plain: true }),
                id_hoa_don: hoaDon.id,
                sanPham: relatedSanPham,
                danh_sach_hang_hoa,
                name_khach_hang: khachHang ? khachHang.name : null,
                code_khach_hang: khachHang ? khachHang.code : null
            };
        });

        return result;
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HoaDon: ' + error.message);
    }
};

export const getAllHoaDonReminder = async () => {
    try {
        const dataList = await HoaDon.findAll({
            where: {
                show: true,
                reminder: true,
                email_sent: false,
            }
        });
        ;
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi HoaDon: ' + error.message);
    }
}

export const updateHoaDonService = async (newData) => {
    const {
        id,
        oldValue,
        name
    } = newData;
    try {
        const data = await HoaDon.findByPk(id);
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

export const deleteHoaDonService = async (ids) => {
    try {
        const dataList = await HoaDon.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length == 0) {
            throw new Error('Không có bản ghi HoaDon nào tồn tại với các ID này');
        }
        await HoaDon.update({
            show: false
        }, {
            where: {
                id: ids,
            },
        });
        return {
            message: 'Các bản ghi HoaDon đã được ẩn thành công'
        };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi HoaDon: ' + error.message);
    }
};
