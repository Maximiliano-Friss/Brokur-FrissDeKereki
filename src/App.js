import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css';

import ivaldiImage from './assets/Ivaldi.png'
import freyaImage from './assets/Freya.png'
import skadiImage from './assets/Skadi.png'

const productList = [
    {id:0, title: 'Ivaldi', description:'Laberinto', price: 390, pictureURL: ivaldiImage},
    {id:1, title: 'Freya', description:'Caja', price: 350, pictureURL: freyaImage},
    {id:2, title: 'Skadi', description:'Puzzle', price: 450, pictureURL: skadiImage},
]

localStorage.setItem('productList', JSON.stringify(productList));

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer message='Catálogo de productos' />
            <ItemDetailContainer />
        </>
    );
}

export default App;
