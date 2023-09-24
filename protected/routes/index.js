const express = require('express');
const app = express();
const router = express.Router();
require("dotenv-safe").config({ path: '.env' });
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth') /* Auth */

const upload = require('../middlewares/uploads');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv-safe").config();

// app.use('/files', express.static(path.resolve(__dirname,"images")));

const workController = require('../controllers/WorkController');
const categoryController = require('../controllers/CategoryController');
const loginController = require('../controllers/LoginController');

// ** Works
router.get('/work/:id', workController.showWork);
router.get('/allwork', workController.allWork);

// ** Images
router.post('/savework', workController.save)
router.post('/uploadimages', upload.any(), workController.uploadImages)

// ** Categories
router.get('/allcategories', categoryController.allCategories);

// ** Login
router.post('/login', loginController.login)
router.post('/verify', loginController.verify)

// ** Panel
router.post('/panel', auth)

module.exports = router