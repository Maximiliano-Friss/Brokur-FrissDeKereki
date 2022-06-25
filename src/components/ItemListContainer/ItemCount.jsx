import React, {useState} from 'react'
import "./ItemListContainer.css"

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);
    const handlerClickAdd = () => {
        setContador(prevContador => Math.min(prevContador + 1, stock))
    }
    const handlerClickSubstract = () => {
        setContador(prevContador => Math.max(prevContador - 1, 0))
    }

    return (
        <div className='item-card'>
            <h3>Juego 1</h3>
            <h2>{contador}</h2>
            <div className='item-card-buttons'>
                <button className='button-amount' onClick={handlerClickSubstract}>-</button>
                <button className='button-onAdd' disabled={contador===0} onClick={onAdd}>Agregar al Carrito</button>
                <button className='button-amount' onClick={handlerClickAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount