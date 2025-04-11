import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';

export const createKTQTCoChePhanBoModel = async (sequelize) => {
    const KTQTCoChePhanBo = sequelize.define(
        'ktqtCoChePhanBo',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            year: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            PB: {
                type: DataTypes.JSONB,
            },
            type: {
                type: DataTypes.STRING,
            },
            dp1: {
                type: DataTypes.TEXT,
            },
            dp2: {
                type: DataTypes.TEXT,
            },
            fillOption: {
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
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        },
        {
            schema: process.env.SCHEMA,
            tableName: 'ktqtCoChePhanBo',
        }
    );
    return KTQTCoChePhanBo;
};
