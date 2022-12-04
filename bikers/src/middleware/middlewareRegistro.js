const { body } = require('express-validator');

const validacion = [
    body('name').notEmpty().withMessage('*Debes ingresar un nombre').bail(),
    body('last_name').notEmpty().withMessage('Debes ingresar un apellido').bail(),
    body('email').notEmpty().isEmail().withMessage('Debes ingresar un email').bail(),
    body('confirm_password').notEmpty().withMessage('*Las contraseñas no coinciden')
]

module.exports = validacion;