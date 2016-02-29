'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'Frenemies', 'updatedAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('Frenemies', 'updatedAt');
  }
};
