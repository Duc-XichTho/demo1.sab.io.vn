import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createHoaDonSanPhamModel = async (sequelize) => {
    const HoaDonSanPham = sequelize.define(
        "hoaDonSanPham",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            hopDong: {
                type: DataTypes.STRING,
            },
            orderId: {
                type: DataTypes.INTEGER,
            },
            productId: {
                type: DataTypes.INTEGER,
            },
            productCode: {
                type: DataTypes.STRING,
            },
            soLuong: {
                type: DataTypes.INTEGER,
            },
            thue: {
                type: DataTypes.INTEGER
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
            result_rule : {
                type: DataTypes.TEXT,
            }

        }, {
            tableName: "hoaDonSanPham",
            schema: process.env.SCHEMA,
        }
    );
    return HoaDonSanPham;
}