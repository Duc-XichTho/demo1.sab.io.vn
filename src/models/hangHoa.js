import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createHangHoaModel = async (sequelize) => {
    const HangHoa = sequelize.define(
        "hangHoa",
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
            id_nha_cung_cap: {
                type: DataTypes.INTEGER,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_hh: {
                type: DataTypes.TEXT,
            },
            dvt: {
                type: DataTypes.TEXT,
            },
            loai: {
                type: DataTypes.STRING,
            },
            nhom_hh: {
                type: DataTypes.TEXT,
            },
            thue_vat: {
                type: DataTypes.DECIMAL,
            },
            gia_nhap: {
                type: DataTypes.DECIMAL,
            },
            gia_ban: {
                type: DataTypes.DECIMAL,
            },
            don_vi: {
                type: DataTypes.STRING,
            },
            tk_doanh_thu: {
                type: DataTypes.TEXT,
            },
            tk_gia_von: {
                type: DataTypes.TEXT,
            },
            tk_hang_ton: {
                type: DataTypes.TEXT,
            },
            tkkt: {
                type: DataTypes.TEXT,
            },
            pp_tinh_gia: {
                type: DataTypes.TEXT,
            },
            theo_doi_ton: {
                type: DataTypes.STRING,
            },
            ton_toi_thieu: {
                type: DataTypes.STRING,
            },
            ton_toi_da: {
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
        }, {
            tableName: "hangHoa",
            schema: process.env.SCHEMA,
        }
    );
    return HangHoa;
};