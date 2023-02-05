import React from "react";
import { useState, useEffect } from "react";
import Users from "./Users";

const Productos = () => {

const [data, setData] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/apis/products')
    .then(response => response.json())
    .then((json) => {
      setData(json.data);
      
    });
}, []);


}

export default Productos;