var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainController.header);

// router.get()

module.exports = router;