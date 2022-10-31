const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/database.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: function(req, res) {
      res.render('home',{accesorios:products});
    },


    // register: function(req, res) {
    //     res.render('register');
    //   },

    login: function(req, res) {
        res.render('login');
      },

}

module.exports = mainController