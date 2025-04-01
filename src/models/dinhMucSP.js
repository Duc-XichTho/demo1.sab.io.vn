import { DataTypes } from "sequelize";
import { SCHEMA } from './Z_CONST.js';

export const createDinhMucSPModel = async (sequelize) => {
    const DinhKMucSP = sequelize.define(
        "dinhMucSP",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            idHangHoa: {
                type: DataTypes.INTEGER,
            },
            approve: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            userApprove: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "dinhMucSP",
            schema: SCHEMA,
        }
    );
    return DinhKMucSP;
};