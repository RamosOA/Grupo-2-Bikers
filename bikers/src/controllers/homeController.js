const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/database.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: function(req, res) {
        res.render('home',{accesorios:products});
      },

    detalle: (req, res) => {
    let producto = products.find(producto => producto.id == req.params.id)
    res.render('detalle', {producto:producto})
},

    carrito: (req, res) => {
    let producto = this.agregarCarrito
    res.render('carrito', {producto:producto})
},

    agregarCarrito: (req, res)=>{
        let listaVacia = [];
        let agregar = listaVacia.push(products[i]);

        res.render('detalle', {agregar:agregar})
    },

    // store: (req, res) => {
    //   let image 
    //   if(req.files[0] != undefined){
    //     image = req.files[0].filename;	
    //   }else{
    //     image = 'default-image.png'
    //   }
    //   let newProduct = {
    //     id: products[products.length - 1].id + 1,
    //     ...req.body,
    //     image: image,
    //   }
    //   products.push(newProduct)
    //   fs.writeFileSync(productsFilePath,JSON.stringify(products,null));
    //   res.redirect('/')
    // },
}

// const accesorios = [
//     {
//       id: 1,
//       titulo: "Casco",
//       descripcion: "Casco para hombre",
//       descripcionLarga: "Deja de cargar morrales en la espalda, liberate y compra un maletero.",
//       precio: "250.000",
//       img: "https://img.remediosdigitales.com/ac7a19/crosshelmet-02/1366_2000.png",
//     },
//     {
//       id: 2,
//       titulo: "Chaqueta",
//       descripcion: "Chaqueta de cuero talla L",
//       descripcionLarga:"Porque la seguridadesta en tus manos, no las decuides y usa guantes. ",
//       precio: "250.000",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCkByxpG5YoA-X05CRKk7ZwhkleXXYG0_fw&usqp=CAU",
//     },
//     {
//       id: 3,
//       titulo: "Maleta",
//       descripcion: "Maleta de 40 Lt",
//       descripcionLarga: "Porque la seguridadesta en tus manos, no las decuides y usa guantes.",
//       precio: "400.000",
//       img: "https://i.linio.com/p/79c39f550d3facf596f0140eb221935b-product.jpg",
//     },
//     {
//       id: 4,
//       titulo: "Guantes",
//       descripcion: "Talla L",
//       descripcionLarga: "Accede aquí a diferentes opciones en chaquetas moto con protección, que te brinden un mayor confort.",
//       precio: "90.000",
//       img: "https://ae01.alicdn.com/kf/H112474a899034cdab008547bca934ee3A/Chaqueta-de-motociclista-para-hombre-ropa-de-verano-de-malla-completa-protecci-n-transpirable-uglyBROS.jpg_Q90.jpg_.webp",
//     },
    
//   ];

module.exports = mainController