var express = require('express');
const productosController = require('../controllers/productosController');
var router = express.Router();
const multer = require('multer');
const path = require('path');
/* const guessMiddleware = require('../middleware/guessMiddleware')
const validacionProducts = require('../middleware/middlewareProducts'); */

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/img')
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

// router.get('/:id/edit', guessMiddleware, productosController.edit);
router.get('/:id/edit', productosController.edit);
router.patch('/:id'/* ,validacionProducts */,upload.any() , productosController.update);

router.get('/create', productosController.anadir);
router.post('/create'/* , validacionProducts */ ,upload.any('img'), productosController.create);
router.delete('/:id', productosController.destroy); 

    
module.exports = router;