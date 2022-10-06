var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')
// const multer = require('multer');
// const path = require('path');

// let storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, 'public/images/products')
//     },
//     filename: function(req, file, cb){
//         const newFileName =  Date.now() + path.extname(file.originalname)
//         cb(null,newFileName);
//     }
// })

// let upload = multer({ storage: storage })

/* GET home page. */
router.get('/', mainController.anadir);
// router.post('/', upload.any(), homeController.store);

// router.get()

module.exports = router;