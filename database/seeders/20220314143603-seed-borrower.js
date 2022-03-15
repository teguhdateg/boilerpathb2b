'use strict';
const bcryp = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Borrowers', [{
        name: 'Teguh Kurniawan',
        email: "teguh.kurniawan@fit.id",
        password:bcryp.hashSync("qwerty456", 10),
        religion:1,
        createdAt:Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt:Sequelize.literal("CURRENT_TIMESTAMP")
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
