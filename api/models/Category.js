module.exports = (sequelize, DataType) => {

  const Category = sequelize.define('Category', {
    id_category: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      length: 90,
      allowNull: false
    },
  }, {
    tableName: 'category',
    timestamps: false
  })

  Category.associate = (modelsList) => {
    Category.hasMany(modelsList.Work_has_category, {
      foreignKey: 'id_work_has_category',
      as: 'work_has_category'
    })
  }

  return Category
}