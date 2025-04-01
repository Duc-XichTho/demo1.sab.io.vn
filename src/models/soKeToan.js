import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createSoKeToanModel = async (sequelize) => {
    const SoKeToan = sequelize.define(
        "soKeToan",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            costPool: {
                type: DataTypes.STRING,
            },
            phieu_thu_chi: {
                type: DataTypes.JSONB,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            phieuKT: {
                type: DataTypes.STRING,
            },
            soChungTuLQ: {
                type: DataTypes.STRING,
            },
            soChungTu: {
                type: DataTypes.STRING,
            },
            loaiTruThue: {
                type: DataTypes.STRING,
            },
            danhDau: {
                type: DataTypes.STRING,
            },
            dinhKhoanPro_id: {
                type: DataTypes.STRING,
            },
            card_id: {
                type: DataTypes.STRING,
            },
            step_id: {
                type: DataTypes.STRING,
            },
            customer: {
                type: DataTypes.STRING,
            },
            employee: {
                type: DataTypes.STRING,
            },
            vu_viec_code: {
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
            so_tien_VND: {
                type: DataTypes.DECIMAL,
            },
            so_tien_nguyen_te: {
                type: DataTypes.DECIMAL,
            },
            fx_rate: {
                type: DataTypes.TEXT,
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
            kenh: {
                type: DataTypes.TEXT,
            },
            kenh2: {
                type: DataTypes.TEXT,
            },
            unit_code: {
                type: DataTypes.TEXT,
            },
            bo_phan_code: {
                type: DataTypes.TEXT,
            },
            product: {
                type: DataTypes.TEXT,
            },
            lenh_sx : {
                type: DataTypes.TEXT,
            },
            mo_hinh_tinh_gia : {
                type: DataTypes.TEXT,
            },
            pl_type: {
                type: DataTypes.TEXT,
            },
            cf_check: {
                type: DataTypes.TEXT,
            },
            pl_value: {
                type: DataTypes.TEXT,
            },
            cash_value: {
                type: DataTypes.TEXT,
            },
            co_che_phan_bo: {
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
            approved_date : {
                type: DataTypes.DATEONLY,
            },
            trang_thai: {
                type: DataTypes.BOOLEAN,
            },
            tax: {
                type: DataTypes.BOOLEAN,
            },
            quan_tri_noi_bo: {
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
            da_dung_1: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "soKeToan",
            schema: SCHEMA,
        }
    );
    return SoKeToan;
};
