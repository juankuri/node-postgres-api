'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class juankuri extends Model {
        static associate(models) {
            // define association here
        }
    };
    juankuri.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      comments: DataTypes.TEXT
  }, {
      sequelize,
      modelName: 'juankuri',
      tableName: 'users_juankuri',  
      timestamps: false
  });  
    return juankuri;
};
