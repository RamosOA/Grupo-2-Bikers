const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
create: function(req, res){
    let newUser
    let contra
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
        
        

        user.push(newUser)
        fs.writeFileSync(usersFilePath,JSON.stringify(user,null));
        
        res.redirect('/');
        } 
        else{
            res.redirect('/singUp')
        }
    
            
    } catch (error) {
        res.redirect('/singUp')
    }
},
}

module.exports = userController;
