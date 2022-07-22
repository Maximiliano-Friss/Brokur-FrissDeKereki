import CartItem from './CartItem.jsx'
import { useContext } from 'react'
import { contextoCart } from '../../context/CartContext'
import './Cart.css'

const CartItemList = () => {
    const {products} = useContext(contextoCart);
    const {removeProduct} = useContext(contextoCart);
    const {clear} = useContext(contextoCart);
    const {total} = useContext(contextoCart);

    const removeFromCart = (id) => {
        removeProduct(id);
    }
    const removeAll = () => {
        clear();
    }
    return (
            <div className='cart-item-list'>
                <div className='total-box rounded-2xl'>
                    <h3>TOTAL:</h3>
                    <p>${Number(total).toFixed(2)}</p>
                </div>
                {products.map((product) => <CartItem key={product.id} productId={product.id} productTitle={product.title} productPrice={product.price} productImage={product.image} productQuantity={product.qty} removeFromCart={removeFromCart}/>)}
                <button className='btn-remove-all' onClick={removeAll}>Borrar todo</button>
            </div>
    )
}

export default CartItemList