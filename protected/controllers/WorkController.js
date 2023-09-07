const { Work, Work_has_category } = require('../models');
const { Image } = require('../models');
const fs = require('fs');
const path = require('path');

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

  save: async (req, res) => {
    try {
      let newWork = req.body;
      const createdWork = await Work.create(newWork);
      const newWorkId = await createdWork.id_work;

      let categories = req.body.category;

      const relationPromises = [];
      for (let cat in categories) {
        const categoryId = categories[cat];

        const relationPromise = Work_has_category.create({
          'id_work_fk': newWorkId,
          'id_category_fk': categoryId
        });

        relationPromises.push(relationPromise);
      }

      await Promise.all(relationPromises);

      res.status(201).json({ msg: 'Work criado com sucesso!', id_work: newWorkId });
    } catch (error) {
      console.error('Erro ao criar o trabalho:', error);
      res.status(400).json({ error });
    }
  },

  uploadImages: async (req, res) => {
    try {
      const files = req.files;
      const id = req.body.id_work;

      console.log('req', req.params)

      const uploadedFiles = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const originalName = file.originalname;

        const sanitizedFileName = originalName
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\s+/g, '_')
          .replace(/[^\w\s]/gi, '')
          .replace(path.extname(originalName), '')
          .toLowerCase();

        const fileExtension = path.extname(originalName);
        const newFileName = `${sanitizedFileName}_work-${id}${fileExtension}`;

        const filePath = path.join('public/uploads', newFileName);

        fs.renameSync(file.path, filePath);

        uploadedFiles.push(newFileName);
      }

      res.status(200).json({ message: 'Arquivos enviados com sucesso.' });
    } catch (error) {
      console.error('Erro ao fazer upload de arquivos:', error);
      res.status(400).json({ error: 'Erro ao fazer upload de arquivos' });
    }
  }
}



  //   uploadImages: async (req, res) => {
  //     try {
  //       const files = req.files;
  //       res.status(200).json({ message: 'Imagens enviadas e nomes salvos no banco de dados com sucesso!'});
  //     } catch (error) {
  //       console.error('Erro ao fazer upload das imagens:', error);
  //       res.status(500).json({ message: 'Erro interno do servidor' });
  //     }
  //   },
  // }

  module.exports = WorkController;