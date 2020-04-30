'use strict';
module.exports = (sequelize, DataTypes) => {
  const testarray = sequelize.define('testarray', {
    test: DataTypes.STRING,
    arr: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  testarray.associate = function(models) {
    // associations can be defined here
  };
  return testarray;
};