'use strict';

module.exports = function (sequelize, DataTypes) {
  var Invoice = sequelize.define('Invoice', {
    InvoiceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerId: DataTypes.INTEGER,
    InvoiceDate: DataTypes.DATE,
    BillingAddress: DataTypes.STRING,
    BillingCity: DataTypes.STRING,
    BillingState: DataTypes.STRING,
    BillingCountry: DataTypes.STRING,
    BillingPostalCode: DataTypes.STRING,
    Total: DataTypes.DECIMAL(2, 10)
  }, {
    tableName: 'Invoice',
    timestamps: false, // gets rid of sequelize looking for createdAt and updatedAt
    classMethods: {
      associate: function(models) {
        Invoice.belongsTo(models.Customer, {foreignKey: 'CustomerId'});
      }
    }
  });
  return Invoice;
};
