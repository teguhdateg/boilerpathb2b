'use strict';

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

     await queryInterface.bulkInsert('religions', [
       {
         religi: 'Islam',
         createdAt:Sequelize.literal("CURRENT_TIMESTAMP"),
         updatedAt:Sequelize.literal("CURRENT_TIMESTAMP")
       },
       {
         religi: 'Kristen',
         createdAt:Sequelize.literal("CURRENT_TIMESTAMP"),
         updatedAt:Sequelize.literal("CURRENT_TIMESTAMP")
       },
       {
         religi: 'Khatolik',
         createdAt:Sequelize.literal("CURRENT_TIMESTAMP"),
         updatedAt:Sequelize.literal("CURRENT_TIMESTAMP")
       },
       {
         religi: 'Budha',
         createdAt:Sequelize.literal("CURRENT_TIMESTAMP"),
         updatedAt:Sequelize.literal("CURRENT_TIMESTAMP")
       },
       {
         religi: 'Hindu',
         createdAt:Sequelize.literal("CURRENT_TIMESTAMP"),
         updatedAt:Sequelize.literal("CURRENT_TIMESTAMP")
       }
      ], {});
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
