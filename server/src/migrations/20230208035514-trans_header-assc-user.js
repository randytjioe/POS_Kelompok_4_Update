'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("Trans_Headers",{
      fields:["user_id"],
      type : "foreign key",
      name: "Cashier",
      references:{
        table:"Users",
        field:"id"
      }
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("Trans_Headers",{
      fields:["user_id"],
      type : "foreign key",
      name: "Cashier",
      references:{
        table:"Users",
        field:"id"
      }
     })
  }
};
