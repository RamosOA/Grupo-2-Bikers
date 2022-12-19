const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const usersFilePath = path.join(__dirname, '../data/users.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
create: function(req, res){
    let newUser
    let contra
    const resultValidation = validationResult(req); 
    try {
        if (req.body.password == req.body.confirm_password){
            contra = req.body.password;
            
            newUser = {
            id: user[user.length - 1].id + 1,
            nombre: req.body.name,
            apellido: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(contra, 10),
            categoria: req.body.categoria
            }
        
            let isLogged = false
            for(var i = 0; i < user.length ; i++){
                if(user[i].email == newUser.email){
                    isLogged = true
                }
            }


            
            if(resultValidation.errors.length > 0){
                return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
                });
            }
            if (!isLogged) {
                user.push(newUser)
                fs.writeFileSync(usersFilePath,JSON.stringify(user,null));
        
                res.redirect('/');
            }
            }else{
                res.render('register')
            }
            
    } catch (error) {
        res.redirect('/singUp')
    }
},
}

module.exports = userController;
