import React from 'react'
import logo from "../../assets/logoBrokur.png"
import CartWidget from './CartWidget'
import {Link, NavLink} from 'react-router-dom'
import "./NavBar.css"
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
            }
            catch (err) {
                alert(err);
            }
        }
        getCategories();
    }, [])

    return (
        <nav>
            <div className='nav-brand'>
                <Link to="/">
                    <img src={logo} alt="Logo Brôkur" />   
                </Link>
                <Link to='/'><h1>Brôkur</h1></Link>
                
            </div>
            <div className='nav-right'>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} >
                            <NavLink to={`/category/${category}`} >{category} </NavLink>
                        </li>) )}
                </ul>
                <Link to='/cart'><CartWidget /></Link>
                
            </div>
        </nav>
    )
}

export default NavBar