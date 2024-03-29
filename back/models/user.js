module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', { 
    nickname: {
      type: DataTypes.STRING(20), 
      allowNull: false, 
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true, 
    },
    password: {
      type: DataTypes.STRING(100), 
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING(100),
    },
    profileBackground: {
      type: DataTypes.STRING(100),
    },
    bio: {
      type: DataTypes.STRING(100),
    },
    subNickname: {
      type: DataTypes.STRING(50),
    },
    }, {
      charset: 'utf8',
      collate: 'utf8_general_ci', 
  }); 
  User.associate = (db) => {
    db.User.hasMany(db.Post, { as: 'Posts'});
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'PostLike', as: 'PostLiked'});
  };
  return User;

  };