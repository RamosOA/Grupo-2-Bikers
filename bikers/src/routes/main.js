var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')
const adminMiddleware = require('../middleware/admin')
// const mainController = require('../controllers/mainControllers');
const userController = require('../controllers/userController');
const validacionRegistro = require('../middleware/middlewareRegistro');
const { body } = require('express-validator')

const validations = [
    body('login_name').notEmpty().withMessage('*Debes agregar un email').bail()
    .isEmail().withMessage('*Debes agregar un formato de correo electronico') ,
    body('login_password').notEmpty().withMessage('*Debes agregar tu contraseña')

]

/* GET home page. */
router.get('/', mainController.home);
router.get('/singUP', mainController.register);
router.post('/', validacionRegistro ,userController.create);
router.get('/login', mainController.login);
router.post('/admin', validations, mainController.admin);

// router.get()

module.exports = router;