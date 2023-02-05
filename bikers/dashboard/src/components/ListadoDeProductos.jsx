import React, {
  useContext,
  useState /* , { useState, useEffect } */,
} from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import "../style/ListadoDeProducto.css";
import Productos from "../Hooks/Productos";

function ListadoDeProductos() {
  const { data, setData } = useContext(ProductContext);
  return (
    <div className="productos">
      <h1 className="titulo">Listado de productos</h1>
      <section className="nombreAndDescription">
      <h2>Nombre</h2>
      <h2>Descripción</h2>
      </section>
      {data.map((res, index) => {
        return (
          <Link to={`/descripcionProducto/${res.id}`} className="linkProductos">
            <p className="nameAndIndex">
              <p key={res.id}>
                {index + 1}. {res.name}
              </p>{" "}
            </p>
            <p className="descriptionProducts">{res.description} </p>
          </Link>
        );
      })}
    </div>
  );
}

export default ListadoDeProductos;
