'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasOne(models.Role)
      // User.hasOne(models.Role, {foreignKey: "accountId", as: "arc"})

    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refreshtoken: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};