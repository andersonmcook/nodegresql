'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // lowercase to uppercase
    return queryInterface.renameTable('frenemies', 'Frenemies');
  },

  down: function (queryInterface, Sequelize) {
    // lowercase to uppercase
    return queryInterface.renameTable('Frenemies', 'frenemies');
  }
};
