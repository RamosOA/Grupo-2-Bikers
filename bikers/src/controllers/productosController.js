const fs = require('fs');
const path = require('path');
const { where } = require('sequelize');

const productsFilePath = path.join(__dirname, '../data/database.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models')

const mainController = {

    detalle: (req, res) => {

    db.Products.findByPk(req.params.id)
        .then(function(producto){
            res.render('detalle', {producto:producto})
        })
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

    edit: function(req, res) {

        db.Products.findByPk(req.params.id)
            .then(function(productToEdit){
                res.render('edit',{productToEdit});
            })

        // let productToEdit = products.find(product => product.id == req.params.id)
		// console.log(productToEdit);
        // res.render('edit',{productToEdit});
    },

    update: (req, res) => {

        db.Products.update({
            name: req.body.name,
            price: req.body.price,
            image: req.body.img,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
	},
    create: function(req, res){

        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            image: req.body.img,
            description: req.body.description
        })

		res.redirect('/');
    },
	destroy : (req, res) => {

        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })

		res.redirect('/')
	}
}

module.exports = mainController