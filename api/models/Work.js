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
    work_objective: {
      type: DataType.STRING,
      length: 1500,
      allowNull: true
    },
    work_year: {
      type: DataType.STRING,
      length: 4,
      allowNull: false
    },
  }, {
    tableName: 'work',
    timestamps: false
  })

  Work.associate = (modelsList) => {
    Work.hasMany(modelsList.Image, {
      foreignKey: 'fk_id_work',
      as: 'image'
    })

    Work.hasMany(modelsList.Work_has_category, {
      foreignKey: 'id_work_fk',
      as: 'work_has_category',
    });
  }

  return Work
}