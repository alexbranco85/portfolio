const express = require('express');
const router = express.Router();

const workController = require('../controllers/WorkController');

router.get('/work/:id', workController.showWork);
router.get('/allwork', workController.allWork);

router.get('/', (req, res) => {
  res.send('Hello World!');
})

router.get('/bu', (req, res) => {
  res.send('Hello World bu!');
})
1
module.exports = router