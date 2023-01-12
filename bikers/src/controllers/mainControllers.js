const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const adminMiddleware = require('../middleware/admin');
const findByEmail = require('../middleware/admin');
const bcryptjs = require('bcryptjs');

const productsFilePath = path.join(__dirname, '../data/database.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require('../database/models')

const mainController = {

    home: function(req, res) {

      db.Products.findAll()
        .then(function(accesorios){
          res.render('home',{accesorios:accesorios});
        })
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
      }

      let userInDB = findByEmail(req.body.login_name)

      if (userInDB) {
        let isOkThePassword = bcryptjs.compareSync(req.body.login_password, userInDB.password)
        if(isOkThePassword){
          delete userInDB.login_password
          req.session.userLogged = userInDB

          if(req.body.remember_user){
            res.cookie('userEmail', req.body.login_name, {maxAge: (1000*60)*60})
          }

          return  res.redirect("/")
        }
        return res.render('login', {
          errors: {
            login_name: {
              msg: "*Las credenciales son inválidas"
            }
          },
          oldData: req.body
        });
      }
      return res.render('login', {  
        errors: {
          login_name: {
            msg: "*Este email no está registrado"
          }
        },
        oldData: req.body
      });
      
    },

    logout: function(req,res){
      res.clearCookie('userEmail')
      req.session.destroy();
      return res.redirect('/')
    }

}

module.exports = mainController