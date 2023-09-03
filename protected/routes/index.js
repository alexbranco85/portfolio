const express = require('express');
const router = express.Router();

const workController = require('../controllers/WorkController');
const WorkController = require('../controllers/WorkController');

router.get('/work/:id', workController.showWork);

router.get('/teste/', WorkController.showWork)

router.get('/', (req, res) => {
  res.send('Hello World!');
})

router.get('/bu', (req, res) => {
  res.send('Hello World bu!');
})

module.exports = router