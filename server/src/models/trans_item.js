'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trans_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Trans_Item.belongsTo(models.Product)
      // models.Product.hasMany(Trans_Item)
      // Trans_Item.belongsTo(models.Trans_Header)
      // models.Trans_Header.hasMany(Trans_Item)
    }
  }
  Trans_Item.init({
    qty: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    trans_header_id : {type:DataTypes.INTEGER,allowNull:false},
    product_id : {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Trans_Item',
  });
  return Trans_Item;
};