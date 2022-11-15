const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/users.json');
const Users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userController = {
    register: function(req, res) {
        res.render('register');
      },
    create: function(req, res){

        l/* et img

        if(req.files[0] != undefined){
            img = req.files[0].filename;
        } */

        let newUser = {
            id: Users[Users.length - 1].id + 1,
            nombre: req.body.name,
            apellido: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        }

        Users.push(newUser)
        fs.writeFileSync(productsFilePath,JSON.stringify(Users,null));

        res.redirect('/');
    },
}

module.exports = userController