const mainController = {

    home: function(req, res) {
        res.render('home');
      },

    carrito: function(req, res) {
        res.render('carrito');
      },

    detalle: function(req, res) {
        res.render('detalle');
      },

    register: function(req, res) {
        res.render('register');
      },

    login: function(req, res) {
        res.render('login');
      },

    header: function(req, res) {
      res.render('../views/partial/header');
    },

}

module.exports = mainController