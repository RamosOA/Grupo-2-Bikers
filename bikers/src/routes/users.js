var express = require('express');
const usersController = require('../controllers/userController');
var router = express.Router();
const multer = require('multer');
const path = require('path');

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

router.get('/', usersController.register);
router.post('/', usersController.create);



module.exports = router;