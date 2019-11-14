'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  user.associate = db => {
    db.users.hasMany(db.wishes)
  };
  return user;
};