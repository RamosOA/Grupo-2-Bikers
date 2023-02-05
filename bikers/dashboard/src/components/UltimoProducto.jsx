import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "../style/ultimoProducto.css";

function UltimoProducto() {
  const { data, setData } = useContext(ProductContext);
  return (
    <div className="total">
        <div className="totalProductos">
            <h3 className="espacio" >Nombre: {data[data.length - 1].name} </h3>
            <p className="espacio"> <strong>Descripcion:</strong>  {data[data.length - 1].description}</p>
            <p className="espacio"> <strong>Precio:</strong>  {data[data.length - 1].price}</p>
        </div>
    </div>
  );
}

export default UltimoProducto;
