const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/users.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userController = {

create: function(req, res){

    let img

    if(req.files[0] != undefined){
        img = req.files[0].filename;
    }

    let newProduct = {
        id: products[products.length - 1].id + 1,
        nombre: req.body.name,
        apellido: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    }
    
    products.push(newProduct)
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null));
    
    res.redirect('/');
},
}