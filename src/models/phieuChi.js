import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPhieuChiModel = async (sequelize) => {
    const PhieuChi = sequelize.define(
        "phieuChi",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            so_phieu: {
                type: DataTypes.STRING,
            },
            ngay_chi: {
                type: DataTypes.DATEONLY,
            },
            hinh_thuc: {
                type: DataTypes.STRING,
            },
            don_mua_lien_quan: {
                type: DataTypes.TEXT,
            },
            tai_khoan_nhan_tien: {
                type: DataTypes.STRING,
            },
            ten_chu_tai_khoan: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.DECIMAL,
            },
            so_tien_bang_chu: {
                type: DataTypes.TEXT,
            },
            ly_do: {
                type: DataTypes.TEXT,
            },
            thanh_toan_cong_no: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.STRING,
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
            tableName: "phieuChi",
            schema: SCHEMA,
        }
    );
    return PhieuChi;
};
