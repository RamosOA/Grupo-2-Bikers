const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { error } = require('console');

const productsFilePath = path.join(__dirname, '../data/users.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userController = {

create: function(req, res){

    
    let contra

    try {
        if (req.body.password == req.body.confirm_password){
            contra = req.body.password;
            
            let newProduct = {
            id: products[products.length - 1].id + 1,
            nombre: req.body.name,
            apellido: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(contra, 10),
            categoria: req.body.categoria
        }

        for(i = 0; i < products.length ; i++){
            if(i.email == products[email].id){
                error
            }
        }
        
        products.push(newProduct)
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null));

        } 
        else{
            res.redirect('/register')
        }
    
            
    } catch (error) {
        res.redirect('/register')
    }
    
    res.redirect('/');
},
}

module.exports = userController;