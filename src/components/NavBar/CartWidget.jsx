import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { contextoCart } from '../../context/CartContext'

const CartWidget = () => {
    const {quantity} = useContext(contextoCart);

    return (
        <div className='flex flex-row'>
            <ShoppingCartIcon sx={{color:'#F5F2F8'}} />   
            {quantity !== 0 &&
            <div className='nav-cart-container flex justify-center items-center'>
                <p>{quantity}</p>
            </div>
            }
        </div>
    )
}

export default CartWidget