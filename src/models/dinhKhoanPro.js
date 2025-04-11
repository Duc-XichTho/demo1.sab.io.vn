import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createDinhKhoanProModel = async (sequelize) => {
    const DinhKhoanPro = sequelize.define(
        "dinhKhoanPro",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            showSoTien: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showKMF: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showKMTC: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showDuAn: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showSanPham: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showNcc: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showHopDong: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showKhachHang: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showEmployee: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showUnitCode: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showHoaDon: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showTaiSan: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showTemCode: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showTaiSanDauTu: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showLoaiTien: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showNganHang: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showChuSoHuu: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showChuongTrinh: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showSoTienNguyenTe: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showFxRate: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showSoChungTu: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            settingSoTien: {
                type: DataTypes.JSONB,
            },
            settingKMF: {
                type: DataTypes.JSONB,
            },
            settingKMTC: {
                type: DataTypes.JSONB,
            },
            settingDuAn: {
                type: DataTypes.JSONB,
            },
            settingSanPham: {
                type: DataTypes.JSONB,
            },
            settingNcc: {
                type: DataTypes.JSONB,
            },
            settingHopDong: {
                type: DataTypes.JSONB,
            },
            settingKhachHang: {
                type: DataTypes.JSONB,
            },
            settingChuThich: {
                type: DataTypes.JSONB,
            },
            settingEmployee: {
                type: DataTypes.JSONB,
            },
            settingUnitCode: {
                type: DataTypes.JSONB,
            },
            settingHoaDon: {
                type: DataTypes.JSONB,
            },
            settingTaiSan: {
                type: DataTypes.JSONB,
            },
            settingTemCode: {
                type: DataTypes.JSONB,
            },
            settingTaiSanDauTu: {
                type: DataTypes.JSONB,
            },
            settingLoaiTien: {
                type: DataTypes.JSONB,
            },
            settingNganHang: {
                type: DataTypes.JSONB,
            },
            settingChuSoHuu: {
                type: DataTypes.JSONB,
            },
            settingChuongTrinh: {
                type: DataTypes.JSONB,
            },
            settingSoTienNguyenTe: {
                type: DataTypes.JSONB,
            },
            settingFx: {
                type: DataTypes.JSONB,
            },
            settingSoChungTu: {
                type: DataTypes.JSONB,
            },
            sub_step_id: {
                type: DataTypes.INTEGER,
            },
            card_id: {
                type: DataTypes.INTEGER,
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
        }, {
            schema: process.env.SCHEMA,
            tableName: "dinhKhoanPro",
            timestamps: false,
        }
    );
    return DinhKhoanPro;
};