const { body } = require('express-validator');

const validacion = [
    body('name').notEmpty().withMessage('*Debes ingresar un nombre con minimo 5 caracteres').bail().isLength({ min: 5}).withMessage('*Debes ingresar un nombre con minimo 5 caracteres'),
    body('description').notEmpty().withMessage('Debes ingresar una descripcion con minimo 20 caracteres').bail().isLength({ min: 20}).withMessage('Debes ingresar una descripcion con minimo 20 caracteres'),
]

module.exports = validacion;