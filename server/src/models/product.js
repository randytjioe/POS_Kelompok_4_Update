"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand);
      models.Brand.hasMany(Product);
      Product.belongsTo(models.Gender);
      models.Gender.hasMany(Product);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      harga: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
      brand_id: { type: DataTypes.INTEGER, allowNull: false },
      gender: DataTypes.STRING,
      stock_update: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
