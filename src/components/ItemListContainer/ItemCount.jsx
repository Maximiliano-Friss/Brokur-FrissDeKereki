import React, {useState} from 'react'

const ItemCount = ({initial, stock}) => {

    const [contador, setContador] = useState(initial);
    const handlerClickAdd = () => {
        setContador(prevContador => Math.min(prevContador + 1, stock))
    }
    const handlerClickSubstract = () => {
        setContador(prevContador => Math.max(prevContador - 1, 0))
    }

    return (
        <>
            <h3>Juego 1</h3>
            <h2>{contador}</h2>
            <button onClick={handlerClickSubstract}>-</button>
            <button onClick={handlerClickAdd}>+</button>
            <button disabled={contador===0}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount