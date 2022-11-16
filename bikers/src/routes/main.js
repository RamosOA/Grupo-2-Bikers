var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')
const adminMiddleware = require('../middleware/admin')
// const mainController = require('../controllers/mainControllers');
const userController = require('../controllers/userController');
const validacionRegistro = require('../middleware/middlewareRegistro');


/* GET home page. */
router.get('/', mainController.home);
router.get('/singUP', mainController.register);
router.post('/', validacionRegistro ,userController.create);
router.get('/login', mainController.login);
router.post('/admin', adminMiddleware, mainController.admin);

// router.get()

module.exports = router;