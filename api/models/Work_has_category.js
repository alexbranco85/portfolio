module.exports = (sequelize, DataType) => {

  const Work_has_category = sequelize.define('Work_has_category', {
    id_work_has_category: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_work_fk: {
      type: DataType.INTEGER,
      allowNull: false
    },
    id_category_fk: {
      type: DataType.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'work_has_category',
    timestamps: false
  })

  Work_has_category.associate = (modelsList) => {
    Work_has_category.belongsTo(modelsList.Category, {
      foreignKey: 'id_category_fk',
      as: 'category'
    });

    Work_has_category.belongsTo(modelsList.Work, {
      foreignKey: 'id_work_fk',
      as: 'work'
    });
  };

  return Work_has_category
}