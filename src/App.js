import React from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import CustomProvider from './context/CartContext.js'

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <CustomProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer message='Catálogo de productos' />} />
                    <Route path='/category/:categoryType' element={<ItemListContainer message='Catálogo de productos' />} />
                    <Route path='/products/:productId' element={<ItemDetailContainer />}/>
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </CustomProvider>
        </BrowserRouter>
    );
}

export default App;
