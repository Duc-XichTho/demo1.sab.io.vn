import {DataTypes} from "sequelize";
import {SCHEMA} from "./Z_CONST.js";

export const createDonHangDetailModel = async (sequelize) => {
    const DonHangDetail = sequelize.define(
        "DonHangDetail",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_don_hang: {
                type: DataTypes.INTEGER,
            },
            id_hang_hoa: {
                type: DataTypes.INTEGER,
            },
            code_hang_hoa: {
                type: DataTypes.STRING,
            },
            name_hang_hoa: {
                type: DataTypes.STRING,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            gia_ban: {
                type: DataTypes.DECIMAL,
            },
            chiet_khau: {
                type: DataTypes.INTEGER,
            },
            thue_vat: {
                type: DataTypes.INTEGER,
            },
            thue_vat_value: {
                type: DataTypes.DECIMAL,
            },
            tong_tien: {
                type: DataTypes.DECIMAL,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "donHangDetail",
            schema: SCHEMA,
        }
    );
    return DonHangDetail;
};
