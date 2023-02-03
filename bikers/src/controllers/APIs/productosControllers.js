const db = require('../../database/models')

const mainController = {

    home: function(req, res) {

      db.Products.findAll()
        .then(products => {
            let product = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
          res.json(product)
        })
    },
    detalle: (req, res) => {

        db.Products.findByPk(req.params.id)
        .then(producto => {
            let product = {
                meta: {
                    status: 200,
                    url: 'api/products'
                },
                data: producto
            }
          res.json(product)
        })
    }
}

module.exports = mainController