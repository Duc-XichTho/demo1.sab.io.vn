import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createDeNghiThanhToanDetailModel = async (sequelize) => {
    const DeNghiThanhToanDetail = sequelize.define(
        " deNghiThanhToanDetail",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            hoaDon: {
                type: DataTypes.STRING,
            },
            hopDong: {
                type: DataTypes.STRING,
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_DNTT:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_hang_hoa: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            so_luong: {
                type: DataTypes.DECIMAL,
            },
            don_gia: {
                type: DataTypes.DECIMAL,
            },
            id_kmns: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_kmf: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_vu_viec: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_BU: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            thue: {
                type: DataTypes.DECIMAL,
            },
            tong_tien:{
                type: DataTypes.DECIMAL,
            },

            company: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.BOOLEAN,
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
            tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            tong_tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            ty_gia : {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "deNghiThanhToanDetail",
            schema: SCHEMA,
        }
    );
    return DeNghiThanhToanDetail;
};
