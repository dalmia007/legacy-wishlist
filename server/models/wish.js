'use strict';

module.exports = (sequelize, DataTypes) => {
  const wish = sequelize.define('wishes', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  wish.associate = db => {
    db.wishes.belongsTo(db.users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return wish;
};
