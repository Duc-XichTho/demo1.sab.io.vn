import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createDinhKhoanProDataModel = async (sequelize) => {
    const DinhKhoanProData = sequelize.define(
        "dinhKhoanProData",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            phieu_thu_chi: {
                type: DataTypes.JSONB,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            phieuKT: {
                type: DataTypes.STRING,
            },
            soChungTuLQ: {
                type: DataTypes.STRING,
            },
            duyet: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            dinhKhoan_id: {
                type: DataTypes.INTEGER,
            },
            card_id: {
                type: DataTypes.INTEGER,
            },
            step_id: {
                type: DataTypes.INTEGER,
            },
            tkNo2: {
                type: DataTypes.STRING,
            },
            tkCo2: {
                type: DataTypes.STRING,
            },
            date: {
                type: DataTypes.DATEONLY,
            },
            note: {
                type: DataTypes.TEXT,
            },
            chuThich: {
                type: DataTypes.TEXT,
            },
            tkNo: {
                type: DataTypes.STRING,
            },
            tkCo: {
                type: DataTypes.STRING,
            },
            soTien: {
                type: DataTypes.STRING,
            },
            kmf: {
                type: DataTypes.STRING,
            },
            kmtc: {
                type: DataTypes.STRING,
            },
            duAn: {
                type: DataTypes.STRING,
            },
            sanPham: {
                type: DataTypes.STRING,
            },
            nhaCungCap: {
                type: DataTypes.STRING,
            },
            hopDong: {
                type: DataTypes.STRING,
            },
            hoaDon: {
                type: DataTypes.STRING,
            },
            khachHang: {
                type: DataTypes.STRING,
            },
            employee: {
                type: DataTypes.STRING,
            },
            unitCode: {
                type: DataTypes.STRING,
            },
            taiSan: {
                type: DataTypes.STRING,
            },
            temCode: {
                type: DataTypes.STRING,
            },
            taiSanDauTu: {
                type: DataTypes.STRING,
            },
            loaiTien: {
                type: DataTypes.STRING,
            },
            nganHang: {
                type: DataTypes.STRING,
            },
            chuSoHuu: {
                type: DataTypes.STRING,
            },
            chuongTrinh: {
                type: DataTypes.STRING,
            },
            soTienNguyenTe: {
                type: DataTypes.STRING,
            },
            fxRate: {
                type: DataTypes.STRING,
            },
            soChungTu: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        }, {
            schema: process.env.SCHEMA,
            tableName: "dinhKhoanProData",
            timestamps: false,
        }
    );
    return DinhKhoanProData;
};
