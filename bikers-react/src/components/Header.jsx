import React from "react";
import "../style/Header.css";

import { Link } from "react-router-dom"; 

const Header = () => {
    return (
        <header>
            <section className="header-uno">
                <a href=" /">
                    <img
                        className="logo"
                        src="\images\img\BB of grande_Mesa de trabajo 1.png"
                        alt="logo"
                    />
                </a>

                <section className="header-derecho">
                    <section className="ul-and-shopping">
                        <ul className="CONTÁCTENOS">
                            <li className="item-nav-pricipal">CONTÁCTENOS</li>
                            <Link to="\singUp" className="subrayado">
                                <li className="item-nav-pricipal">Sign-IN</li>
                            </Link>
                            <a href="\login" className="subrayado">
                                <li className="item-nav-pricipal">Log-IN</li>
                            </a>
                        </ul>

                        <ul className="CONTÁCTENOS">
                            <li className="item-nav-pricipal">CONTÁCTENOS</li>
                            <a href="\logout" class="subrayado">
                                <li className="item-nav-pricipal">Sign-OFF</li>
                            </a>
                        </ul>

                        <form action="\productos\carrito">
                            <button class="boton-shopping1" type="submit">
                                
                            </button>
                        </form>
                    </section>
                    <form action="" className="input-header">
                        <label for="Buscar"></label>
                        <section className="arreglos-para-user">
                            <section className="barra-boton-busqueda">
                                <input
                                    className="input-header2"
                                    type="text"
                                    placeholder="Buscar"
                                    name="Buscar"
                                />
                                <div>
                                    <button className="boton-busqueda1" type="button">
                                        
                                    </button>
                                </div>
                            </section>
                            <div>
                                <button className="boton-user" type="button">
                                    
                                </button>
                            </div>
                        </section>
                    </form>
                </section>
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
                    <li className="items">ACCESORIO</li>
                    <li className="items">CASCOS</li>
                    <li className="items">MALETAS</li>
                    <li className="items">DRYBAGS</li>
                    <li className="items">PILOTOS</li>
                    <li className="items">IMPERMEABLE</li>
                    <li className="items">INTERCOMS</li>
                    <li className="items">ESENCIALES</li>
                    <a href="/productos/create" className="añadir-producto-nav-header">
                        <li className="items">AÑADIR PRODUCTOS</li>
                    </a>
                </ul>

                <section className="shopping-busqueda">
                    <div>
                        <button className="boton-busqueda" type="button">
                            
                        </button>
                    </div>
                    <div>
                        <button className="boton-shopping" type="button">
                            
                        </button>
                    </div>
                </section>
            </section>
        </header>
    );
};

export default Header;
