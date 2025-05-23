import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';

export const createKTQTPlanModel = async (sequelize) => {
    const KTQTPlan = sequelize.define(
        'ktqtPlan',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            bu: {
                type: DataTypes.TEXT,
            },
            rowData: {
                type: DataTypes.JSONB,
            },
            type: {
                type: DataTypes.TEXT,
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
            tableName: 'ktqtPlan',
        }
    );
    return KTQTPlan;
};
