import React from 'react'
import logo from "../../assets/logoBrokur.png"
import CartWidget from './CartWidget'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div className='nav-brand'>
                <a href="../../../public/index.html">
                    <img src={logo} alt="Logo Brôkur" />   
                </a>
                <h1>Brôkur</h1>
            </div>
            <div className='nav-right'>
                <ul>
                    <li><a href="../../public/index.html">Inicio</a></li>
                    <li><a href="../../public/pages/productos.html">Productos</a></li>
                    <li><a href="../../public/pages/contacto.html">Contacto</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar