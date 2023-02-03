const db = require('../../database/models')

const mainController = {

    users: function(req, res) {

      db.User.findAll()
        .then(products => {
            let product = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: 'api/users'
                },
                data: products
            }
          res.json(product)
        })
    },
    detalle: (req, res) => {

        db.User.findByPk(req.params.id)
        .then(producto => {
            let product = {
                meta: {
                    status: 200,
                    url: `api/users/${req.params.id}`
                },
                data: producto
            }
          res.json(product)
        })
    }
}

module.exports = mainController