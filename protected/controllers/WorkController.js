const { Work } = require('../models')

const WorkController = {
  showWork: async (req, res) => {
    console.log('req', req.params)
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