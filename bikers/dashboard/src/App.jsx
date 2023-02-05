import logo from "./logo.png";
import "./App.css";
import Total from "./components/Total";
import ListadoDeProductos from "./components/ListadoDeProductos";
import UltimoProducto from "./components/UltimoProducto";
import ListadoDeUsuarios from "./components/ListadoDeUsuarios";

import { Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { DescripcionProducto } from "./components/DescripcionProducto";

function App() {
  return (
    <ProductProvider>
      <UserProvider>
        <div>
          <section className="header-uno">
            <img className="logo" src={logo} alt="logo" />
          </section>
          <section className="header-nav">
            <section className="burguer-and-menú">
              <div>
                <button className="burguer-menu" type="button">
                  
                </button>
              </div>
              <p id="PalabraMenú">MENÚ</p>
            </section>
            <ul className="header-nav-items">
              <Link to="/" exact="true" className="link">
                <li className="items">TOTAL</li>
              </Link>
              <Link to="/listadoDeProductos" exact="true" className="link">
                <li className="items">LISTADO DE PRODUCTOS</li>
              </Link>
              <Link to="/ultimoProducto" exact="true" className="link">
                <li className="items">ULTIMO PRODUCTO</li>
              </Link>
              <Link to="/listaDeUsuario" exact="true" className="link">
                <li className="items">LISTA DE USUARIOS</li>
              </Link>
            </ul>
          </section>

          <Routes>
            <Route path="/" element={<Total />} />
            <Route
              path="/listadoDeProductos"
              element={<ListadoDeProductos />}
            />
            <Route
              path="/descripcionProducto/:id"
              element={<DescripcionProducto />}
            ></Route>
            <Route path="/ultimoProducto" element={<UltimoProducto />} />
            <Route path="/listaDeUsuario" element={<ListadoDeUsuarios />} />
          </Routes>
        </div>
      </UserProvider>
    </ProductProvider>
  );
}

export default App;
