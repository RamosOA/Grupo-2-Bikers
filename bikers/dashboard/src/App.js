// import logo from "./logo.svg";
// import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  let [contador, setContador] = useState(0);

  return (
    <div>
      <h1>contador: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setContador(0);
        }}
      >
        restablecer
      </button>
    </div>
  );
}

export default App;
