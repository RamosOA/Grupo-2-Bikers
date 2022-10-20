const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/database.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {

    detalle: (req, res) => {
    let producto = products.find(producto => producto.id == req.params.id)
    res.render('detalle', {producto:producto})
},

    carrito: (req, res) => {
    let producto = this.agregarCarrito
    res.render('carrito', {producto:producto})
},
    carritoView: function(req, res) {
        res.render('carrito');
    },

    anadir: function(req, res) {
        res.render('anadirProducto');
    },

    create: function(req, res){

        let img

        if(req.files[0] != undefined){
            img = req.files[0].filename;
        }

        let newProduct = {
            id: products[products.length - 1].id + 1,
            titulo: req.body.titulo,
            img: img,
            descripcion: req.body.descripcion,
            descripcionLarga: req.body.descripcionLarga,
            precio: req.body.precio
        }
        products.push(newProduct)
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null));
        
		res.redirect('/');
    },
}

module.exports = mainController