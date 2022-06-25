import React from 'react'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"

const ItemListContainer = ({message}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }

    return (        

        <>
            <h2>{message}</h2>
            <div className='item-list-container'>
                <ItemCount initial={0} stock={5} onAdd={onAdd}/>
            </div>
        </>
        )
}

export default ItemListContainer