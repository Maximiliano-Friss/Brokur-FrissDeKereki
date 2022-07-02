import {useState} from 'react'
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
        <>
            <h4>{contador}</h4>
            <div className='item-card-buttons'>
                <button className='button-amount rounded-full' onClick={handlerClickSubstract}>-</button>
                <button className='button-onAdd rounded-full' disabled={contador===0} onClick={onAdd}>Agregar al Carrito</button>
                <button className='button-amount rounded-full' onClick={handlerClickAdd}>+</button>
            </div>
        </>
    )
}

export default ItemCount