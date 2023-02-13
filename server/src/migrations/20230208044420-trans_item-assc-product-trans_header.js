'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("Trans_Items",{
      fields:["product_id"],
      type : "foreign key",
      name: "Product",
      references:{
        table:"Products",
        field:"id"
      }
     }),
     queryInterface.addConstraint("Trans_Items",{
      fields:["trans_header_id"],
      type : "foreign key",
      name: "Trans_Header",
      references:{
        table:"Trans_Headers",
        field:"id"
      }
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("Trans_Items",{
      fields:["product_id"],
      type : "foreign key",
      name: "Product",
      references:{
        table:"Products",
        field:"id"
      }
     }),
     queryInterface.removeConstraint("Trans_Items",{
      fields:["trans_header_id"],
      type : "foreign key",
      name: "Trans_Header",
      references:{
        table:"Trans_Headers",
        field:"id"
      }
     })
  }
};
