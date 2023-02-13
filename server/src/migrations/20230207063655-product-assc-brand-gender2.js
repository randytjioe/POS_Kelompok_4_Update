'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("Products",{
      fields:["gender_id"],
      type : "foreign key",
      name: "Gender",
      references:{
        table:"Genders",
        field:"id"
      }
     })
  
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("Products",{
      fields:["gender_id"],
      type : "foreign key",
      name: "Gender",
      references:{
        table:"Genders",
        field:"id"
      }
     })
  }
};
