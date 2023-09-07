module.exports = (sequelize, DataType) => {

  const Image = sequelize.define('Image', {
    id_image: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      length: 90,
      allowNull: false
    },
    fk_id_work: {
      type: DataType.INTEGER,
      allowNull: false
    },
    featured: {
      type: DataType.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'image',
    timestamps: false
  })

  Image.associate = (modelsList) => {
    Image.belongsTo(modelsList.Work, {
      foreignKey: 'id_work',
      as: 'work'
    })
  }

  return Image
}