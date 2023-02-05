import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DescripcionProducto = () => {
    const [data, setData] = useState({});
    const {id} = useParams();

    console.log(id)
    useEffect(() => {
    fetch(`http://localhost:3001/apis/products/${id}`)
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            setData(json.data);
        });
    }, []);

    return (
        <div className="total">
            <div className="totalProductos">
                <h3 className="espacio" >Nombre: {data.name} </h3>
                <p className="espacio"> <strong>Descripcion:</strong>  {data.description}</p>
                <p className="espacio"> <strong>Precio:</strong>  {data.price}</p>
            </div>
        </div>
      );
}