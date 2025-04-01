import { SCHEMA } from './Z_CONST.js';
import { DataTypes } from 'sequelize';

export const createKTQTReportManagementModel = async (sequelize) => {
  const fields = {};
  for (let i = 1; i <= 12; i++) {
    fields[`target_t${i}`] = {
      type: DataTypes.DECIMAL,
      allowNull: true,
    };
    fields[`consult_t${i}`] = {
      type: DataTypes.DECIMAL,
      allowNull: true,
    };
  }
  for (let i = 1; i <= 4; i++) {
    fields[`target_q${i}`] = {
      type: DataTypes.DECIMAL,
      allowNull: true,
    };
    fields[`consult_q${i}`] = {
      type: DataTypes.DECIMAL,
      allowNull: true,
    };
  }

  const KTQTReportManagement = sequelize.define(
    'ktqtReportManagement',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      year: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      ...fields,
      financial_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      target_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      consult_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      result_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      target_y: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      consult_y: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type_value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      filter: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      filter_value: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      self_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      a_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      b_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      c_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      d_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      e_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      show_benchmark1: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      show_benchmark2: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: SCHEMA,
      tableName: 'ktqtReportManagement',
    }
  );
  return KTQTReportManagement;
};
