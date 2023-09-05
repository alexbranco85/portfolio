const { Work } = require('../models')

const WorkController = {

  allWork: async (req, res) => {
    try {
      const work = await Work.findAll();
      res.status(200).json({ data: work, success: true });
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar Work', success: false });
    }
  },

  showWork: async (req, res) => {
    try {
      const { id } = req.params;
      const work = await Work.findOne({
        where: {
          id_work: parseInt(id)
        }
      })
      res.status(200).send({ data: work, success: true })
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar Work', success: false });
    }
  },
}

module.exports = WorkController;