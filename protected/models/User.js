module.exports = (sequelize, DataType) => {

  const User = sequelize.define('User', {
    id_user: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataType.STRING,
      length: 45,
      allowNull: false
    },
    password: {
      type: DataType.STRING,
      length: 145,
      allowNull: false
    },
  }, {
    tableName: 'users',
    timestamps: false
  })

  return User;
}