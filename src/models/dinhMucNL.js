import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createDinhMucNLModel = async (sequelize) => {
    const DinhMucNL = sequelize.define(
        "dinhMucNL",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            idSP: {
                type: DataTypes.INTEGER,
            },
            idNL: {
                type: DataTypes.INTEGER,
            },
            SoLuong: {
                type: DataTypes.INTEGER,
            },
            DonVi: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: process.env.SCHEMA,
            tableName: "dinhMucNL",
        }
    );
    return DinhMucNL;
};