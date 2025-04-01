import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createDataCRMModel = async (sequelize) => {
    const DataCRM = sequelize.define(
        "dataCRM",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            ngay: {
                type: DataTypes.STRING,
            },
            week: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            ma_khach_hang: {
                type: DataTypes.STRING,
            },
            ten_khach_hang: {
                type: DataTypes.STRING,
            },
            group: {
                type: DataTypes.STRING,
            },
            dia_chi: {
                type: DataTypes.STRING,
            },
            province: {
                type: DataTypes.STRING,
            },
            ma_san_pham: {
                type: DataTypes.STRING,
            },
            ten_san_pham: {
                type: DataTypes.STRING,
            },
            so_luong: {
                type: DataTypes.DECIMAL,
            },
            don_gia: {
                type: DataTypes.DECIMAL,
            },
            thanh_tien: {
                type: DataTypes.DECIMAL,
            },
            ty_le_giam_gia: {
                type: DataTypes.DECIMAL,
            },
            gia_tri_giam_gia: {
                type: DataTypes.DECIMAL,
            },
            thanh_tien_sau_giam_gia: {
                type: DataTypes.DECIMAL,
            },
            ma_kenh: {
                type: DataTypes.STRING,
            },
            ten_kenh: {
                type: DataTypes.STRING,
            },
            nhan_vien_ban_hang: {
                type: DataTypes.STRING,
            },
            phong_ban: {
                type: DataTypes.STRING,
            },
            ghi_chu: {
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
            tableName: "dataCRM",
            schema: SCHEMA,
        }
    );
    return DataCRM;
};
