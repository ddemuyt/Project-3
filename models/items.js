module.exports = function (sequelize, DataTypes) {
  return sequelize.define('items', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 256],
      },
    },
    item_price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 256],
      },
    },
    item_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    item_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    item_img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
    {
      freezeTableName: true,
    });
};
