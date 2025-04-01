import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPhieuChi2Model = async (sequelize) => {
    const PhieuChi2 = sequelize.define(
        "PhieuChi2",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            code: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            id_card_create: {
                type: DataTypes.INTEGER,
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
            },
            ngay_chi: {
                type: DataTypes.STRING,
            },
            hinh_thuc: {
                type: DataTypes.STRING,
            },
            tam_ung_lien_quan: {
                type: DataTypes.JSONB,
            },
            de_nghi_lien_quan: {
                type: DataTypes.JSONB,
            },
            ten_chu_tai_khoan: {
                type: DataTypes.STRING,
            },
            tai_khoan_nhan_tien: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.DECIMAL,
            },
            ly_do: {
                type: DataTypes.TEXT,
            },

            thanh_toan_cong_no: {
                type: DataTypes.STRING,
            },
            tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            ty_gia : {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },

            created_at: {
                type: DataTypes.STRING,
            },
            type: {
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
            tableName: "phieuChi2",
            schema: SCHEMA,
        }
    );
    return PhieuChi2;
};
