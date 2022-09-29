const mainController = {

    home: function(req, res) {
        res.render('home',{accesorios:accesorios});
      },

    detalle: (req, res) => {
    let producto = accesorios.find(producto => producto.id == req.params.id)
    res.render('detalle', {producto:producto})
},

    carrito: (req, res) => {
    let producto = this.agregarCarrito
    res.render('carrito', {producto:producto})
},

    agregarCarrito: (req, res)=>{
        let listaVacia = [];
        let agregar = listaVacia.push(accesorios[i]);

        res.render('detalle', {agregar:agregar})
    },
}

const accesorios = [
    {
      id: 1,
      titulo: "Casco",
      descripcion: "Casco para hombre",
      descripcionLarga: "Deja de cargar morrales en la espalda, liberate y compra un maletero.",
      precio: "250.000",
      img: "https://img.remediosdigitales.com/ac7a19/crosshelmet-02/1366_2000.png",
    },
    {
      id: 2,
      titulo: "Chaqueta",
      descripcion: "Chaqueta de cuero talla L",
      descripcionLarga:"Porque la seguridadesta en tus manos, no las decuides y usa guantes. ",
      precio: "250.000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCkByxpG5YoA-X05CRKk7ZwhkleXXYG0_fw&usqp=CAU",
    },
    {
      id: 3,
      titulo: "Maleta",
      descripcion: "Maleta de 40 Lt",
      descripcionLarga: "Porque la seguridadesta en tus manos, no las decuides y usa guantes.",
      precio: "400.000",
      img: "https://i.linio.com/p/79c39f550d3facf596f0140eb221935b-product.jpg",
    },
    {
      id: 4,
      titulo: "Guantes",
      descripcion: "Talla L",
      descripcionLarga: "Accede aquí a diferentes opciones en chaquetas moto con protección, que te brinden un mayor confort.",
      precio: "90.000",
      img: "https://ae01.alicdn.com/kf/H112474a899034cdab008547bca934ee3A/Chaqueta-de-motociclista-para-hombre-ropa-de-verano-de-malla-completa-protecci-n-transpirable-uglyBROS.jpg_Q90.jpg_.webp",
    },
    
  ];

module.exports = mainController