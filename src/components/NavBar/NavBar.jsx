import React from 'react'
import logo from "../../assets/logoBrokur.png"
import CartWidget from './CartWidget'
import {Link, NavLink, useParams} from 'react-router-dom'
import "./NavBar.css"
import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import {getDocs, collection} from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoryCollection = collection(db, 'categories');
        getDocs(categoryCollection)
        .then(result => {
            const categoryList = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setCategories(categoryList);
        })
        .catch (err => {
            console.log(err);
        })
    }, []);


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
                    {categories.map((category) => (
                        <li key={category.index} >
                            <NavLink to={`/category/${category.category}`} >{category.category} </NavLink>
                        </li>) )}
                </ul>
                <Link to='/cart'><CartWidget /></Link>
                
            </div>
        </nav>
    )
}

export default NavBar