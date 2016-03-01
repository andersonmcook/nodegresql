'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
    GenreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: DataTypes.STRING
  }, {
    tableName: 'Genre',
    timestamps: false, // gets rid of sequelize looking for createdAt and updatedAt
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};
