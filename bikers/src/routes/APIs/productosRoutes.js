var express = require('express');
var router = express.Router();
let productosControllers = require('../../controllers/APIs/productosControllers');

router.get('/products', productosControllers.home)
router.get('/products/:id', productosControllers.detalle)

module.exports = router;