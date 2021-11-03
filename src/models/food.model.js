// import { sequelize, DateDataTypeOptions } from "sequelize";
/**
 * @function food - Module representing the food model.
 * create a new food model using define method of sequelize.
 * @param {sequelize} sequelize - An instance of Sequelize.
 * @param  {DateDataTypeOptions} DateDataTypeOptions instance of DateDataType
 */

const food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    name: { type: DataTypes.STRING, allowNull: false },
    calories: { type: DataTypes.STRING, allowNull: false },
    original_place: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = food;
