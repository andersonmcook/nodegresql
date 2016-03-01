'use strict';

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    CustomerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Company: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Country: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    Email: DataTypes.STRING,
    SupportRepId: DataTypes.INTEGER
  }, {
    tableName: 'Customer',
    timestamps: false, // gets rid of sequelize looking for createdAt and updatedAt
    classMethods: {
      associate: function(models) {
        Customer.hasMany(models.Invoice, {foreignKey: 'CustomerId'});
      }
    }
  });
  return Customer;
};
