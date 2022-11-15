const { body } = require('express-validator');

const validacion = [
    body('name').exists().notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({min: 5}).withMessage('El nombre debe tener minimo 5 carácteres')
]

module.exports = validacion;