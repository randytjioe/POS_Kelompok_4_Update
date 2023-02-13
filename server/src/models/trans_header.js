'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trans_Header extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Trans_Header.belongsTo(models.User)
      // models.User.hasMany(Trans_Header)
    }
  }
  Trans_Header.init({
    no_trans: DataTypes.STRING,
    total: DataTypes.INTEGER,
    tgl: DataTypes.DATEONLY,
    user_id : {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Trans_Header',
  });
  return Trans_Header;
};