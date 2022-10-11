var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainController.home);
router.get('/register', mainController.register);
router.get('/login', mainController.login);

// router.get()

module.exports = router;
