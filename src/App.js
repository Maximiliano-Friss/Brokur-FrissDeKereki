import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import './App.css';

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer message='Catálogo de productos'/>
        </>
    );
}

export default App;
