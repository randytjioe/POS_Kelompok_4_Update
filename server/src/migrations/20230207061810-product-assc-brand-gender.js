'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addConstraint("Products",{
    fields:["brand_id"],
    type : "foreign key",
    name: "Brand",
    references:{
      table:"Brands",
      field:"id"
    }
   })

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("Products",{
      fields:["brand_id"],
      type : "foreign key",
      name: "Brand",
      references:{
        table:"Brands",
        field:"id"
      }
     })
    
    },
  };
