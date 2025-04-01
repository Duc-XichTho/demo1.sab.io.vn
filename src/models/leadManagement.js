import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createLeadManagementModel = async (sequelize) => {
    const LeadManagement = sequelize.define(
        "leadManagement",
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
            year: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            type: {
                type: DataTypes.STRING,
            },
            ten_lien_he: {
                type: DataTypes.STRING,
            },
            chu_thich_lien_he: {
                type: DataTypes.TEXT,
            },
            sdt: {
                type: DataTypes.STRING,
            },
            dia_chi: {
                type: DataTypes.STRING,
            },
            tinh_thanh: {
                type: DataTypes.STRING,
            },
            mail: {
                type: DataTypes.STRING,
            },
            nguon_lead: {
                type: DataTypes.STRING,
            },
            uu_tien: {
                type: DataTypes.STRING,
            },
            da_convert: {
                type: DataTypes.BOOLEAN,
            },
            pic: {
                type: DataTypes.TEXT,
            },
            thong_tin_khac: {
                type: DataTypes.TEXT,
            },
            ngay_cuoi_lien_he: {
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
            tableName: "leadManagement",
            schema: SCHEMA,
        }
    );
    return LeadManagement;
};
