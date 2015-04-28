// Example model


module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
     // associate: function (models) {
        // example on how to add relations
        // User.hasMany(models.Orders);
    //  }
    }
  });

  return User;
};

