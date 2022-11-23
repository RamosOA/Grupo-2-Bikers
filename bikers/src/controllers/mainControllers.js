const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/database.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: function(req, res) {
      res.render('home',{accesorios:products});
    },

    register: function(req, res) {
      res.render('register');
    },

    login: function(req, res) {
        res.render('login');
      }, 

    admin: function(req, res) { 
      const resultValidation = validationResult(req);

      if(resultValidation.errors.length > 0){
        return res.render('login', {
          errors: resultValidation.mapped(),
          oldData: req.body
        });
      }else{
        res.render('adminUser',{accesorios:products})
      }
    },

}

module.exports = mainController