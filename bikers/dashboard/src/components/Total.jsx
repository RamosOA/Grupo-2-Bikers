import React, { useContext /* , { useState, useEffect } */ } from "react";
import { ProductContext } from "../context/ProductContext";
import "../style/Total.css";
import { UserContext } from "../context/UserContext";
// import Productos from "../Hooks/Productos";
import Users from "../Hooks/Users";
import { Link } from "react-router-dom";

const App = (props) => {
  const { data, setData } = useContext(ProductContext);
  const { user, setUser } = useContext(UserContext);

  console.log(data);
  console.log(user);

  return (
    <div className="Total">
      {/* <h1>Total de productos: {data.length}</h1> */}
      <Link to="/listadoDeProductos" exact="true" className="linksTotales">
        <h1 className="totalProductos">Total de productos: {data.length}</h1>
      </Link>
      <Link to="/listaDeUsuario" exact="true" className="linksTotales">
        <h1 className="totalProductos">
          Total usuarios: <Users />
        </h1>
      </Link>
    </div>
  );
};

export default App;

// function Total () {

//     fetch('http://localhost:3001/apis/products')
//         .then(response => response.json())
//         .then(data =>{
//             return data
//         })
//         .catch(err => console.log(err))
//         let variable = data

// return (
//     <div>
//     <h1>{variable.map(item => (<li key={item.id}>{item.name}</li>))}</h1>
//     </div>
// );
// }

// export default Total
