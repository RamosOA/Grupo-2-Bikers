var express = require('express');
const productosController = require('../controllers/productosController');
var router = express.Router();
var multer = require("multer");
var path = require("path")

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/products')
    },
    filename: function(req, file, cb){
        const newFileName =  Date.now() + path.extname(file.originalname)
        cb(null,newFileName);
    }
})

let upload = multer({ storage: storage })

/* GET home page. */
router.get('/detalle/:id', productosController.detalle);
router.get('/carrito', productosController.carritoView);
router.get('/create', productosController.anadir);
router.post('/create', upload.any(),productosController.create);


// router.get()

module.exports = router;