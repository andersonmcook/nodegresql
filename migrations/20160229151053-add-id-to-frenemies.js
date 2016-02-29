'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Frenemies', 'id', {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Frenemies', 'id');
  }
};
