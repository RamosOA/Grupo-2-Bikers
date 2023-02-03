var express = require('express');
var router = express.Router();
let userController = require('../../controllers/APIs/userControllers')

router.get('/users', userController.users)
router.get('/users/:id', userController.detalle)

module.exports = router