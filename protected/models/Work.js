module.exports = (sequelize, DataType) => {

  const Work = sequelize.define('Work', {
    id_work: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    work_title: {
      type: DataType.STRING,
      length: 150,
      allowNull: false
    },
    work_description: {
      type: DataType.STRING,
      length: 1500,
      allowNull: false
    },
  }, {
    tableName: 'work',
    timestamps: false
  })

  Work.associate = (modelsList) => {
    Work.hasMany(modelsList.Image, {
      foreignKey: 'id_image',
      as: 'image'
    })
  }

  Work.associate = (modelsList) => {
    Work.hasMany(modelsList.Work_has_category, {
      foreignKey: 'id_work_has_category',
      as: 'work_has_category'
    })
  }

  return Work
}