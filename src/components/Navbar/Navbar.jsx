import React from "react";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return(
        <>
         <nav className="cabecera">
            <h1 className="titulo">Mundo PC</h1>
            <ul>
                <li><a href="#">Placad de Videos</a></li>
                <li><a href="#">Procesadores</a></li>
                <li><a href="#">Gabinetes</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
        
        </>      
    )
}
export default Navbar;