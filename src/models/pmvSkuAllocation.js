import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPMVSkuAllocationModel = async (sequelize) => {
    const PMVSkuAllocation = sequelize.define(
        "pmvSkuAllocation",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            deploy_detail_id: {
                type: DataTypes.STRING,
            },
            brand: {
                type: DataTypes.STRING,
            },
            sku: {
                type: DataTypes.STRING,
            },
            ratio: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            isUse: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            info: {
                type: DataTypes.JSONB,
            },
            year: {
                type: DataTypes.STRING,
            },
            company: {
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
            tableName: "pmvSkuAllocation",
            schema: SCHEMA,
        }
    );
    return PMVSkuAllocation;
};
