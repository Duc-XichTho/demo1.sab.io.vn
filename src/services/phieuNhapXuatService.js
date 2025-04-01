import {
  PhieuXuat,
  PhieuNhap,
  HangHoa,
  Lo,
  Kho,
  NhanVien,
  KhachHang,
  NhaCungCap,
  DetailPhieuXuat,
  DetailPhieuNhap
} from '../postgres/postgres.js';

export const getAllPhieuXuatService = async () => {
  try {
    const phieuXuatRecords = await PhieuXuat.findAll({ where: { show: true }, raw: true });
    const detailPhieuXuatRecords = await DetailPhieuXuat.findAll({ where: { show: true }, raw: true });
    const hangHoaRecords = await HangHoa.findAll({ where: { show: true }, raw: true });
    const loRecords = await Lo.findAll({ where: { show: true }, raw: true });
    const khoRecords = await Kho.findAll({ where: { show: true }, raw: true });
    const nhanvienRecords = await NhanVien.findAll({ where: { show: true }, raw: true });
    const khachhangRecords = await KhachHang.findAll({ where: { show: true }, raw: true });

    const result = phieuXuatRecords.map((phieuXuat) => {
      let tongTien = 0;
      const danh_sach_hang_hoa = detailPhieuXuatRecords
        .filter((detail) => detail.id_phieu_xuat === phieuXuat.id)
        .map((detail) => {
          const hangHoa = detail.id_hang_hoa
            ? hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa)
            : null;
          const lo = detail.id_lo
            ? loRecords.find((l) => l.id === detail.id_lo)
            : null;
          const kho = detail.id_kho
            ? khoRecords.find((k) => k.id === detail.id_kho)
            : null;
          tongTien += detail.so_luong * detail.gia_xuat;
          return {
            id: detail && detail.id_hang_hoa ? detail.id_hang_hoa : '-',
            code: hangHoa ? hangHoa.code : '-',
            name: hangHoa ? hangHoa.name : '-',
            dvt: hangHoa ? hangHoa.dvt : '-',
            lo_code: lo && lo.code ? lo.code : '-',
            lo_name: lo && lo.name ? lo.name : '-',
            kho_code: kho && kho.code ? kho.code : '-',
            kho_name: kho && kho.name ? kho.name : '-',
            so_luong: detail && detail.so_luong ? detail.so_luong : '-',
            gia_xuat: detail && detail.gia_xuat ? detail.gia_xuat : '-',
          };
        });

      const nhanvien = nhanvienRecords.find((nv) => nv.id === phieuXuat.id_nhan_vien) || {};
      const khachhang = khachhangRecords.find((kh) => kh.id === phieuXuat.id_khach_hang) || {};

      return {
        id_phieu_xuat: phieuXuat.id,
        phieu_lq: phieuXuat.phieu_lq,
        tongTien: tongTien,
        code: phieuXuat.code,
        gom: phieuXuat.gom,
        ngay_xuat: phieuXuat.ngay || '-',
        code_nhan_vien: nhanvien.code || '-',
        name_nhan_vien: nhanvien.name || '-',
        code_khach_hang: khachhang.code || '-',
        name_khach_hang: khachhang.name || '-',
        don_hang: phieuXuat.donHang || null,
        id_card_create: phieuXuat.id_card_create,
        lenh_san_xuat: phieuXuat.lenh_san_xuat || '-',
        danh_sach_hang_hoa: danh_sach_hang_hoa,
        type: 'phieu_xuat',
        trang_thai: phieuXuat ? phieuXuat.trang_thai : null,
        created_at : phieuXuat.created_at
      };
    });

    return result;
  } catch (error) {
    console.error('Error in getAllPhieuXuatService:', error);
    throw error;
  }
};

export const getAllPhieuNhapService = async () => {
  try {
    const phieuNhapRecords = await PhieuNhap.findAll({ where: { show: true }, raw: true });
    const detailPhieuNhapRecords = await DetailPhieuNhap.findAll({ where: { show: true }, raw: true });
    const hangHoaRecords = await HangHoa.findAll({ where: { show: true }, raw: true });
    const loRecords = await Lo.findAll({ where: { show: true }, raw: true });
    const khoRecords = await Kho.findAll({ where: { show: true }, raw: true });
    const nhanvienRecords = await NhanVien.findAll({ where: { show: true }, raw: true });
    const nhaCungCapRecords = await NhaCungCap.findAll({ where: { show: true }, raw: true });

    const result = phieuNhapRecords.map((phieuNhap) => {
      const danh_sach_hang_hoa = detailPhieuNhapRecords
        .filter((detail) => detail.id_phieu_nhap === phieuNhap.id)
        .map((detail) => {
          const hangHoa = detail.id_hang_hoa
            ? hangHoaRecords.find((hh) => hh.id === detail.id_hang_hoa)
            : null;
          const lo = detail.id_lo
            ? loRecords.find((l) => l.id === detail.id_lo)
            : null;
          const kho = detail.id_kho
            ? khoRecords.find((k) => k.id === detail.id_kho)
            : null;

          return {
            id: detail && detail.id_hang_hoa ? detail.id_hang_hoa : '-',
            code: hangHoa ? hangHoa.code : '-',
            name: hangHoa ? hangHoa.name : '-',
            dvt: hangHoa ? hangHoa.dvt : '-',
            lo_code: lo && lo.code ? lo.code : '-',
            lo_name: lo && lo.name ? lo.name : '-',
            kho_code: kho && kho.code ? kho.code : '-',
            kho_name: kho && kho.name ? kho.name : '-',
            so_luong: detail && detail.so_luong ? detail.so_luong : '-',
            gia_nhap: detail && detail.gia_nhap ? detail.gia_nhap : '-',
          };
        });

      const nhanvien = nhanvienRecords.find((nv) => nv.id === phieuNhap.id_nhan_vien) || {};
      const nhaCungCap = nhaCungCapRecords.find((ncc) => ncc.id === phieuNhap.id_nha_cung_cap) || {};

      return {
        id_phieu_nhap: phieuNhap.id,
        phieu_lq: phieuNhap.phieu_lq,
        ngay_nhap: phieuNhap.ngay || '-',
        code_nhan_vien: nhanvien.code || '-',
        name_nhan_vien: nhanvien.name || '-',
        code_nha_cung_cap: nhaCungCap.code || '-',
        name_nha_cung_cap: nhaCungCap.name || '-',
        danh_sach_hang_hoa: danh_sach_hang_hoa,
        type: 'phieu_nhap',
        created_at : phieuNhap.created_at,
        gom: phieuNhap.gom,


      };
    })

    return result;
  } catch (error) {

  }
}
