// import { sequelize, DateDataTypeOptions } from "sequelize";
/**
 * @function clothes - Module representing the food model.
 * create a new clothes model using define method of sequelize.
 * @param {sequelize} sequelize - An instance of Sequelize.
 * @param  {DateDataTypeOptions} DateDataTypeOptions instance of DateDataType
 */

const clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    type_name: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    size: { type: DataTypes.STRING, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = clothes;
