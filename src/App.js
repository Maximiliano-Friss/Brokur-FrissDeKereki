import React from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <ItemListContainer message='Catálogo de productos' />
            <ItemDetailContainer />
        </BrowserRouter>
    );
}

export default App;
