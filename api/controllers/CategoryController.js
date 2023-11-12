const { Work } = require('../models')
const { Category } = require('../models')

const CategoryController = {

  allCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ data: categories, success: true });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar Categories', success: false });
    }
  },
  
}

module.exports = CategoryController;