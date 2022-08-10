import React from 'react';
import CartWidget from './CartWidget';
import {Link, NavLink, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import {getDocs, collection} from 'firebase/firestore';

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
                    <img src="https://i.ibb.co/Bnmyc91/logo-Brokur.png" alt="Logo Brôkur" />   
                </Link>
                <Link to='/'><h1>Brôkur</h1></Link>
                
            </div>
            <div className='nav-right'>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} ><NavLink to={`/category/${category.category}`} >{category.category} </NavLink></li>)
                    )}
                </ul>
                <Link to='/cart'><CartWidget /></Link>
            </div>
        </nav>
    )
}

export default NavBar