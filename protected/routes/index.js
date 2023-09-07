const express = require('express');
const app = express();
const router = express.Router();

const upload = require('../middlewares/uploads');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const workController = require('../controllers/WorkController');
const categoryController = require('../controllers/CategoryController')

// ** Works
router.get('/work/:id', workController.showWork);
router.get('/allwork', workController.allWork);

// ** Images
router.post('/savework', workController.save)
router.post('/uploadimages', upload.any(), workController.uploadImages)

// ** Categories
router.get('/allcategories', categoryController.allCategories);

router.get('/', (req, res) => {
  res.send('Hello World!');
})

router.get('/bu', (req, res) => {
  res.send('Hello World bu!');
})
1
module.exports = router