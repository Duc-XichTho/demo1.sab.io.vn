import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';

export const createKTQTProjectModel = async (sequelize) => {
    const KTQTProject = sequelize.define(
        'ktqtProject',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            group: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.STRING,
            },
            unit_code: {
                type: DataTypes.STRING,
            },
            DT: {
                type: DataTypes.DECIMAL,
            },
            CF: {
                type: DataTypes.DECIMAL,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            ngay_bat_dau: {
                type: DataTypes.DATEONLY,
            },
            ngay_ket_thuc: {
                type: DataTypes.DATEONLY,
            },
            khach_hang: {
                type: DataTypes.TEXT,
            },
            ngan_sach: {
                type: DataTypes.DECIMAL,
            },
            loai : {
                type: DataTypes.STRING,
            },
            phan_loai : {
                type: DataTypes.STRING,
            },
            bo_phan : {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },

            quan_ly_da: {
                type: DataTypes.TEXT,
            },
            tk_wip: {
                type: DataTypes.TEXT,
            },
            phan_tram_hoan_thanh: {
                type: DataTypes.STRING,
            },

            dp: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            chu_thich: {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            cau_truc: {
                type: DataTypes.JSONB,
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
            schema: process.env.SCHEMA,
            tableName: 'ktqtProject',
            timestamps: false,
        }
    );
    return KTQTProject;
};
