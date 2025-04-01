import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createSoChuoiModel = async (sequelize) => {
    const SoChuoi = sequelize.define(
        "soChuoi",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ma_chain: {
                type: DataTypes.STRING,
            },
            ma_step: {
                type: DataTypes.STRING,
            },
            customer: {
                type: DataTypes.STRING,
            },
            employee: {
                type: DataTypes.STRING,
            },
            deal: {
                type: DataTypes.STRING,
            },
            noi_bo: {
                type: DataTypes.STRING,
            },
            consol: {
                type: DataTypes.STRING,
            },
            day: {
                type: DataTypes.STRING,
            },
            month: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            dien_giai: {
                type: DataTypes.TEXT,
            },
            tk_no: {
                type: DataTypes.STRING,
            },
            tk_co: {
                type: DataTypes.STRING,
            },
            ps_no: {
                type: DataTypes.STRING,
            },
            ps_co: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.DECIMAL
            },
            supplier: {
                type: DataTypes.TEXT,
            },
            kmns: {
                type: DataTypes.TEXT,
            },
            kmf: {
                type: DataTypes.TEXT,
            },
            project: {
                type: DataTypes.TEXT,
            },
            unit_code: {
                type: DataTypes.TEXT,
            },
            team_code: {
                type: DataTypes.TEXT,
            },
            product: {
                type: DataTypes.TEXT,
            },
            hoa_don: {
                type: DataTypes.TEXT,
            },
            hop_dong: {
                type: DataTypes.TEXT,
            },
            so_chung_tu: {
                type: DataTypes.TEXT,
            },
            chu_thich: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.TEXT,
            },
            final_approved_by : {
                type: DataTypes.TEXT,
            },
            initiated_by : {
                type: DataTypes.TEXT,
            },
            approved_date : {
                type: DataTypes.DATEONLY,
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
            tableName: "soChuoi",
            schema: SCHEMA,
        }
    );
    return SoChuoi;
};
