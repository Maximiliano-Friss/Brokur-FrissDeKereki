import React from 'react'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"

const ItemListContainer = ({message}) => {
    return (
        <>
            <h2>{message}</h2>
            <ItemCount initial={0} stock={5} />
        </>
        )
}

export default ItemListContainer