import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    const rutas = [
        "Placas de Videos",
        "Monitores",
        "Procesadores",
        "Accesorios"

    ]
    return (
        <div>
            <Link className="cabecera" to={"/"}>
               <h1>Mundo PC</h1> 
                </Link>
            <ul>
                {rutas.map ((e,id)=>
                <li   key={id}>
                <Link className="cabecera" to={`${e}`}>
                    {e}
                </Link>

                </li>
                )
                }

            </ul>
            <CartWidget/>

        </div>
    );
};

export default Navbar;