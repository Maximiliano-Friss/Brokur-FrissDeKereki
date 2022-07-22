import './Cart.css'

const CartItem = ({productTitle, productId, productPrice, productImage, productQuantity, removeFromCart}) => {
    
    const handlerClickRemove = () => {
        removeFromCart(productId);
    }

    return (
        <div className='cart-item-card rounded-md'>
            <div className='cart-item-card-img flex flex-column justify-center items-center'>
                <img className='mx-auto' src={productImage} alt={productTitle} />
            </div>
            <div className='cart-item-card-info'>
                <h3 className='info-h3'>{productTitle}</h3>
                <h4>${Number(productPrice).toFixed(2)} <span>/ unidad</span></h4>
                <div>
                    <h5><span>Cantidad:</span> {productQuantity}</h5>
                    <h5><span>Total:</span> ${Number(productQuantity*productPrice).toFixed(2)}</h5>
                </div>
                <button className='btn-remove-item rounded-md' onClick={handlerClickRemove}>Quitar del carrito</button>
            </div>
        </div>
    )
}

export default CartItem