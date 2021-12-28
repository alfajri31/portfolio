const express = require('express');
const mainController = require('../controller/main.js');
const router = express.Router();

router.get('/',mainController.getIndex);

router.get('/about',mainController.getAbout);

router.get('/gobola',mainController.getGobola);

module.exports = router;
