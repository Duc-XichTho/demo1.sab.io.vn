import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';
import dayjs from 'dayjs';

export const createKTQTSoKeToanModel = async (sequelize) => {
    const KTQTSoKeToan = sequelize.define(
        'ktqtSoKeToan',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idKTQT: {
                type: DataTypes.INTEGER,
            },
            costPool: {
                type: DataTypes.STRING,
            },
            phan_loai : {
                type: DataTypes.STRING,
            },
            deal : {
                type: DataTypes.TEXT,
            },
            deal2 : {
                type: DataTypes.TEXT,
            },
            noiBo: {
                type: DataTypes.STRING,
            },
            isDuplicated: {
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
            diengiai: {
                type: DataTypes.STRING,
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
                type: DataTypes.STRING,
            },
            vender: {
                type: DataTypes.STRING,
            },
            supplier: {
                type: DataTypes.STRING,
            },
            employee: {
                type: DataTypes.STRING,
            },
            kmns: {
                type: DataTypes.STRING,
            },
            kmfGoc: {
                type: DataTypes.TEXT,
            },
            kmf: {
                type: DataTypes.STRING,
            },
            project: {
                type: DataTypes.STRING,
            },
            project2: {
                type: DataTypes.STRING,
            },
            unit_code: {
                type: DataTypes.TEXT,
            },
            unit_code2: {
                type: DataTypes.TEXT,
            },
            team_code: {
                type: DataTypes.STRING,
            },
            product: {
                type: DataTypes.TEXT,
            },
            product2: {
                type: DataTypes.TEXT,
            },
            kenh: {
                type: DataTypes.TEXT,
            },
            kenh2: {
                type: DataTypes.TEXT,
            },
            CCPBDV: {
                type: DataTypes.TEXT,
            },
            CCBSP: {
                type: DataTypes.TEXT,
            },
            CCPBKENH: {
                type: DataTypes.TEXT,
            },
            CCPBDEAL: {
                type: DataTypes.TEXT,
            },
            CCPBPROJECT: {
                type: DataTypes.TEXT,
            },
            PBPROJECT: {
                type: DataTypes.TEXT,
            },
            PBDV: {
                type: DataTypes.TEXT,
            },
            PBSP: {
                type: DataTypes.TEXT,
            },
            PBDEAL: {
                type: DataTypes.TEXT,
            },
            PBKENH: {
                type: DataTypes.TEXT,
            },
            pl_type: {
                type: DataTypes.STRING,
            },
            cf_Check: {
                type: DataTypes.STRING,
            },
            pl_value: {
                type: DataTypes.STRING,
            },
            cash_value: {
                type: DataTypes.STRING,
            },
            co_che_phan_bo: {
                type: DataTypes.STRING,
            },
            dp1: {
                type: DataTypes.TEXT,
            },
            hoaDon: {
                type: DataTypes.TEXT,
            },
            hopDong: {
                type: DataTypes.TEXT,
            },
            soChungTu: {
                type: DataTypes.TEXT,
            },
            da_dung_1:{
                type: DataTypes.TEXT,
            },
            chuThich: {
                type: DataTypes.TEXT,
            },
            dp2: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            createAt: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            updateAt: {
                type: DataTypes.DATE,
                defaultValue: dayjs().toDate(),
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: process.env.SCHEMA,
            tableName: 'ktqtSoKeToan',
        }
    );
    return KTQTSoKeToan;
};
