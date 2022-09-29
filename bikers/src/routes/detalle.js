var express = require('express');
const detalleController = require('../controllers/homeController');
var router = express.Router();

/* GET home page. */
router.get('/:id', detalleController.detalle);

// router.get()

module.exports = router;