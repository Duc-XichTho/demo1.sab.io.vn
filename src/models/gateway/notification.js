import { DataTypes } from "sequelize";

export const createNotificationGWModel = async (sequelize) => {
    const Notification = sequelize.define(
        "notification",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ticket_id: {
                type: DataTypes.STRING,
            },
            user_email: {
                type: DataTypes.STRING,
            },
            userNoti: {
                type: DataTypes.TEXT,
            },
            content: {
                type: DataTypes.STRING,
            },
            read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isLog: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "notification",
            schema: 'gateway',
            timestamps: true,
        }
    );
    return Notification;
};
