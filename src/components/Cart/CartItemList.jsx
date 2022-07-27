import CartItem from './CartItem.jsx'
import { useContext } from 'react'
import { contextoCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

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
                <div className='mb-5'>
                    <button className='btn-remove-all' onClick={removeAll}>Delete all</button>
                    <button className='btn-enter-user-data'><Link to='/userForm'>Continue</Link></button>
                </div>
            </div>
    )
}

export default CartItemList