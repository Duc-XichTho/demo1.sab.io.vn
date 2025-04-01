import {SCHEMA} from './Z_CONST.js';
import {DataTypes} from "sequelize";

export const createKTQTPhanTichNoteModel = async (sequelize) => {
    const KTQTPhanTichNote = sequelize.define(
        "ktqtPhanTichNote",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            user_email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            table: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            }
        },
        {
            schema: SCHEMA,
            tableName: "ktqtPhanTichNote",
            timestamps: false,
        }
    );

    return KTQTPhanTichNote;
};