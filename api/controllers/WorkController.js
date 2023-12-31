const { Work, Work_has_category, Category } = require('../models');
const { Image } = require('../models');

const fs = require('fs');
const path = require('path');

const WorkController = {


  allWork: async (req, res) => {
    try {
      const works = await Work.findAll({
        include: [
          {
            model: Work_has_category,
            as: 'work_has_category',
            attributes: ['id_category_fk'],
            include: [
              {
                model: Category,
                as: 'category',
                attributes: ['id_category', 'name'],
              },
            ],
          }, {
            model: Image,
            as: 'image',
            attributes: ['id_image', 'name', 'featured'],
          },
        ],
        order: [
          ['id_work', 'DESC'],
        ],
      });

      res.status(200).json({ data: works, success: true });
    } catch (error) {
      res.status(400).json({ error: error, success: false });
    }
  },

  showWork: async (req, res) => {
    try {
      const { id } = req.params;

      const work = await Work.findOne({
        where: {
          id_work: parseInt(id)
        },
        include: [
          {
            model: Work_has_category,
            as: 'work_has_category',
            attributes: ['id_category_fk'],
            include: [
              {
                model: Category,
                as: 'category',
                attributes: ['id_category', 'name'],
              },
            ],
          }, {
            model: Image,
            as: 'image',
            attributes: ['id_image', 'name', 'featured'],
          },
        ],
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

      res.status(201).json({ msg: 'Work saved!', id_work: newWorkId });
    } catch (error) {
      console.error('Erro ao criar o trabalho:', error);
      res.status(400).json({ error });
    }
  },

  update: async (req, res) => {
    try {
      let updateWork = req.body;
      let workId = req.body.id_work;

      const updated = await Work.update(updateWork, { where: { id_work: workId } });

      let categories = req.body.category;

      let removeCategories = req.body.categoriesToDelete;

      let removeImages = req.body.imagesToDelete;

      let changeFeatured = req.body.changeFeatured;

      const relationPromises = [];
      for (const categoryId of categories) {
        const existingRelation = await Work_has_category.findOne({
          where: {
            id_work_fk: workId,
            id_category_fk: categoryId
          }
        });
        if (!existingRelation) {
          const relationPromise = Work_has_category.create({
            id_work_fk: workId,
            id_category_fk: categoryId
          });
          relationPromises.push(relationPromise);
        }
      }

      if (removeCategories) {
        for (const categoryId of removeCategories) {
          const relationPromise = Work_has_category.destroy({
            where: {
              id_work_fk: workId,
              id_category_fk: categoryId
            }
          });
          relationPromises.push(relationPromise);
        }
      }

      if (removeImages) {
        console.log('removeImages', removeImages)
        for (const idImage of removeImages) {
          const relationPromise = Image.destroy({
            where: {
              fk_id_work: workId,
              id_image: idImage
            }
          });
          relationPromises.push(relationPromise);
        }
      }

      if (changeFeatured) {



        const oldFeatured = await Image.findOne({
          where: {
            fk_id_work: workId,
            featured: 1
          }
        })

        if (oldFeatured && oldFeatured.id_image != changeFeatured) {
          const relationPromise = await Image.update({ featured: 0 }, {
            where: {
              id_image: oldFeatured.id_image
            }
          })
          relationPromises.push(relationPromise);
        }
        if (oldFeatured && oldFeatured.id_image != changeFeatured) {
          const relationPromise = Image.update({ featured: 1 }, {
            where: {
              id_image: changeFeatured
            }
          })
          relationPromises.push(relationPromise);
        }
      }
      await Promise.all(relationPromises);

      res.status(201).json({ msg: 'Work updated!', id_work: workId });
    } catch (error) {
      console.error('Erro ao atualizar o trabalho:', error);
      res.status(400).json({ error });
    }
  },

  uploadImages: async (req, res) => {
    try {
      const files = req.files;
      const id = req.body.id_work;
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
        const filePath = path.join('images/uploads', newFileName);
        fs.renameSync(file.path, filePath);
        uploadedFiles.push({ name: newFileName, fieldname: file.fieldname });
      }

      if (uploadedFiles.length > 0) {
        for (const item of uploadedFiles) {
          if (item.fieldname != 'featuredImage') {
            let image = {
              name: item.name,
              fk_id_work: id,
              featured: 0
            }
            let response = Image.create(image);
          } else {
            let image = {
              name: item.name,
              fk_id_work: id,
              featured: 1
            }
            let response = Image.create(image);
          }
        }
      }

      res.status(200).json({ message: 'Arquivos enviados com sucesso.', success: true });
    } catch (error) {
      console.error('Erro ao fazer upload de arquivos:', error);
      res.status(400).json({ error: 'Erro ao fazer upload de arquivos' });
    }
  }
}

module.exports = WorkController;