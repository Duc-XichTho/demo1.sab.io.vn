import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js'

export const createTaiKhoanModel = async (sequelize) => {
    const TaiKhoan = sequelize.define(
        "taiKhoan",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            HuongDanSuDung: {
                type: DataTypes.TEXT,
            },
            TD_KhachHang: {
                type: DataTypes.STRING,
            },
            TD_NCC: {
                type: DataTypes.STRING,
            },
            TD_NhanVien: {
                type: DataTypes.STRING,
            },
            TD_DuAn: {
                type: DataTypes.STRING,
            },
            TD_HopDong: {
                type: DataTypes.STRING,
            },
            TD_ChuSoHuu: {
                type: DataTypes.STRING,
            },
            TD_NganHang: {
                type: DataTypes.STRING,
            },
            TD_LoaiTien: {
                type: DataTypes.STRING,
            },
            TD_DiaChi: {
                type: DataTypes.STRING,
            },
            TD_HangHoa: {
                type: DataTypes.STRING,
            },
            TD_TaiSan: {
                type: DataTypes.STRING,
            },
            TD_BoPhan: {
                type: DataTypes.STRING,
            },
            TD_BU: {
                type: DataTypes.STRING,
            },
            TD_TaiSanDauTu: {
                type: DataTypes.STRING,
            },
            TD_HoaDon: {
                type: DataTypes.STRING,
            },
            TD_ChuongTrinh: {
                type: DataTypes.STRING,
            },
            TD_KMF: {
                type: DataTypes.STRING,
            },
            TD_ThuChi: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            no_dau_ky: {
                type: DataTypes.DECIMAL,
            },
            co_dau_ky: {
                type: DataTypes.DECIMAL,
            },
            ma_tk: {
                type: DataTypes.STRING,
            },
            tk_cha: {
                type: DataTypes.STRING,
            },
            cap: {
                type: DataTypes.TEXT,
            },
            name: {
                type: DataTypes.TEXT,
            },
            ten_the_hien: {
                type: DataTypes.TEXT,
            },
            phan_nhom: {
                type: DataTypes.STRING,
            },
            doi_tuong_theo_doi: {
                type: DataTypes.JSONB,
            },
            tk_chi_tiet: {
                type: DataTypes.STRING,
            },
            cho_phep_dk: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            phan_loai: {
                type: DataTypes.STRING,
            },
            kc_no: {
                type: DataTypes.STRING,
            },
            kc_co: {
                type: DataTypes.STRING,
            },
            kc_net: {
                type: DataTypes.STRING,
            },
            kc_net2: {
                type: DataTypes.STRING,
            },
            b01: {
                type: DataTypes.STRING,
            },
            bo2: {
                type: DataTypes.STRING,
            },
            tinh_chat: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.TEXT,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
            deleted_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            user_update: {
                type: DataTypes.STRING,
            },
            user_delete: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "taiKhoan",
            schema: SCHEMA,
        }
    );
    return TaiKhoan;
};
