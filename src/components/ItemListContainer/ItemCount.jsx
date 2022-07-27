import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);
    const handlerClickAdd = () => {
        setContador(prevContador => Math.min(prevContador + 1, stock))
    }
    const handlerClickSubstract = () => {
        setContador(prevContador => Math.max(prevContador - 1, 0))
    }

    const handlerClickAddtoCart = () => {
        onAdd(contador);
    }

    return (
        <div className='item-count'>
            <h5 className='text-center font-bold text-4xl pt-5 mb-5'>{contador}</h5>
            <div className='item-card-buttons'>
                <button className='button-amount rounded-full' onClick={handlerClickSubstract}>-</button>
                <button className='button-onAdd rounded-full' disabled={contador===0} onClick={handlerClickAddtoCart}>Add to Cart</button>
                <button className='button-amount rounded-full' onClick={handlerClickAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount