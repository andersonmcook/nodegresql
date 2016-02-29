'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'Frenemies', 'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('Frenemies', 'createdAt');
  }
};
