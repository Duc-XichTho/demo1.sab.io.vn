import {PhieuXuat, HangHoa, Lo, Kho, NhanVien, KhachHang, DetailPhieuXuat, HoaDon} from '../postgres/postgres.js';
import {getPhieuGiaoHangByCardIdService} from "./phieuGiaoHangService.js";

export const getPhieuXuatByCardIdService = async (id) => {
    try {
        const phieuXuatRecords = await PhieuXuat.findAll({
            where: {
                id_card_create: +id,
                show: true
            },
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
            let tongTien = 0;
            // Use filter instead of find for detailPhieuXuat
            const detailPhieuXuatList = detailPhieuXuatRecords.filter((detail) => detail.id_phieu_xuat === phieuXuat.id);
            const phieu_giao_hang =[]
            phieuGiaoHangRecord.forEach(pgh=>{
                pgh.list_id_phieu_xuat.forEach(idPX=> {
                    if(idPX == phieuXuat.id){
                        phieu_giao_hang.push(`PGH ${pgh.id}`)
                    }
                })
            })
            // Create danh_sach_hang_hoa using the filtered details
            const danh_sach_hang_hoa = detailPhieuXuatList.map((detail) => {
                const hangHoa = hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa);
                const lo = loRecords.find((l) => l.id === detail.id_lo);
                const kho = khoRecords.find((k) => k.id === detail.id_kho);
                tongTien += detail.so_luong * detail.gia_xuat;
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
                tongTien: tongTien,
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
                created_at : phieuXuat.created_at
            };
        });

        return result;
    } catch (error) {
        console.error('Error in getPhieuXuatByCardIdService:', error);
        throw error;
    }
}


export const createPhieuXuatService = async (newData) => {
    try {
        let year = newData.year;

        if (!/^\d{4}$/.test(year)) {
            year = new Date().getFullYear().toString();
        }
        const currentYear = String(year).slice(-2);
        const nextId = (await PhieuXuat.max('id')) + 1 || 1;

        newData.code = `HDB/${1000 + nextId}/${currentYear}`;

        const data = await PhieuXuat.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi PhieuXuat: ' + error.message);
    }
};

export const getPhieuXuatByIdService = async (id) => {
    try {
        const data = await PhieuXuat.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuXuat không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi PhieuXuat: ' + error.message);
    }
};

export const getAllPhieuXuatService = async () => {
    try {
        const dataList = await PhieuXuat.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            },
            order: [['id', 'DESC']],
        });
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
        throw new Error('Lỗi khi lấy danh sách bản ghi PhieuXuat: ' + error.message);
    }
};

export const updatePhieuXuatService = async (newData) => {
    const { id, oldValue, name } = newData;
    try {
        const data = await PhieuXuat.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi PhieuXuat không tồn tại');
        }
        await data.update(newData)
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi PhieuXuat: ' + error.message);
    }
};

export const deletePhieuXuatService = async (ids) => {
    try {
        const dataList = await PhieuXuat.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi PhieuXuat nào tồn tại với các ID này');
        }
        await PhieuXuat.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi PhieuXuat đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi PhieuXuat: ' + error.message);
    }
};

