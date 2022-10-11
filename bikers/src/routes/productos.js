var express = require('express');
const productosController = require('../controllers/productosController');
var router = express.Router();

/* GET home page. */
router.get('/detalle/:id', productosController.detalle);
router.get('/carrito', productosController.carritoView);
router.get('/anadir', productosController.anadir);


// router.get()

module.exports = router;