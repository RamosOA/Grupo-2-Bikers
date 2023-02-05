import React from "react";
import { useState, useEffect } from "react";

import "../style/ListadeUsuarios.css";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/apis/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);

  return (
    <div className="productos">
      <h1 className="titulo">Listado de usuarios</h1>
      <section className="nombreAndDescriptions">
        <h2>Nombre</h2>
        <h2>email</h2>
      </section>
      <p>
        {data.map((item, index) => (
          <p key={item.id} className="listaUsuarios">
            <p>{index+1}. {item.first_name} {item.last_name}</p> <p> {item.email}</p>
          </p>
        ))}
      </p>
    </div>
  );
};

export default Users;
