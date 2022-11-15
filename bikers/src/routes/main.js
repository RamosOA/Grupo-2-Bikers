var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')
const adminMiddleware = require('../middlewares/admin')

/* GET home page. */
router.get('/', mainController.home);
// router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.post('/admin', adminMiddleware, mainController.admin);

// router.get()

module.exports = router;