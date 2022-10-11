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
}

module.exports = mainController