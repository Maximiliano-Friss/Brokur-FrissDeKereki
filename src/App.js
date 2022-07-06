import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css';

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
