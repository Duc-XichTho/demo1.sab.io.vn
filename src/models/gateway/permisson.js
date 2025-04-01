import { DataTypes } from "sequelize";
import { SCHEMA } from "./ZZ_CONST.js";

export const createPermissionGWModel = async (sequelize) => {
    const Permission = sequelize.define(
        "permission",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company_id: {
                type: DataTypes.INTEGER,
            },
            user_email: {
                type: DataTypes.STRING,
            },
            role: {
                type: DataTypes.STRING,
            },
            isEditor: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isConfirm: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isResetStatus: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isGuest: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "permission",
            schema: SCHEMA,
            timestamps: true,
        }
    );
    return Permission;
};
