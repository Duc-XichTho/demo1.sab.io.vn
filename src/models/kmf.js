import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createKmfModel = async (sequelize) => {
    const Kmf = sequelize.define(
        "kmf",
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
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            loai_chi_phi: {
                type: DataTypes.TEXT,
            },
            nhom_kmcp: {
                type: DataTypes.STRING,
            },
            tk_hach_toan: {
                type: DataTypes.JSONB,
            },
            kiem_soat_ngan_sach: {
                type: DataTypes.STRING,
            },
            duoc_khau_tru_thue: {
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
            tableName: "kmf",
            schema: process.env.SCHEMA,
        }
    );
    return Kmf;
};
