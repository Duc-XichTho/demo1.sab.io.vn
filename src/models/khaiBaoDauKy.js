import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createKhaiBaoDauKyModel = async (sequelize) => {
    const KhaiBaoDauKy = sequelize.define(
        "khaiBaoDauKy",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            HuongDanSuDung : {
                type: DataTypes.TEXT,
            },
            TD_KhachHang : {
                type: DataTypes.STRING,
            },
            TD_NCC : {
                type: DataTypes.STRING,
            },
            TD_NhanVien : {
                type: DataTypes.STRING,
            },
            TD_DuAn : {
                type: DataTypes.STRING,
            },
            TD_HopDong : {
                type: DataTypes.STRING,
            },
            TD_ChuSoHuu : {
                type: DataTypes.STRING,
            },
            TD_NganHang : {
                type: DataTypes.STRING,
            },
            TD_LoaiTien : {
                type: DataTypes.STRING,
            },
            TD_DiaChi : {
                type: DataTypes.STRING,
            },
            TD_HangHoa : {
                type: DataTypes.STRING,
            },
            TD_TaiSan : {
                type: DataTypes.STRING,
            },
            TD_BoPhan : {
                type: DataTypes.STRING,
            },
            TD_BU : {
                type: DataTypes.STRING,
            },
            TD_TaiSanDauTu : {
                type: DataTypes.STRING,
            },
            TD_HoaDon : {
                type: DataTypes.STRING,
            },
            TD_ChuongTrinh : {
                type: DataTypes.STRING,
            },
            code : {
                type: DataTypes.STRING,
            },
            no_dau_ky : {
                type: DataTypes.DECIMAL,
            },
            co_dau_ky : {
                type: DataTypes.DECIMAL,
            },
            net_dau_ky : {
                type: DataTypes.DECIMAL,
            },
            ma_tk: {
                type: DataTypes.STRING,
            },
            cap: {
                type: DataTypes.TEXT,
            },
            ten_tk: {
                type: DataTypes.TEXT,
            },
            ten_the_hien: {
                type: DataTypes.TEXT,
            },
            phan_nhom : {
                type: DataTypes.STRING,
            },
            doi_tuong_theo_doi : {
                type: DataTypes.JSONB,
            },
            tinh_chat : {
                type: DataTypes.STRING,
            },
           TD_KMF : {
                type: DataTypes.STRING,
            },
            TD_ThuChi : {
                type: DataTypes.STRING,
            },
            tk_chi_tiet : {
                type: DataTypes.STRING,
            },
            cho_phep_dk : {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
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
            tableName: "khaiBaoDauKy",
            schema: process.env.SCHEMA,
        }
    );
    return KhaiBaoDauKy;
};
