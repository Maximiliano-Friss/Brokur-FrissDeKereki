import { useEffect, useContext } from 'react';
import { contextoCart } from '../../context/CartContext'

const OrderInfo = ({idSale, total}) => {
    const {clear} = useContext(contextoCart);
    
    useEffect(() => {
        clear();
    }, [])

    return (
        <div className="order-info-container">
            <h2>Thank you for your purchase!</h2>
            <h3 className="mt-5">Here is some relevant information about your order.</h3>
            <p><span className="font-bold">ID ORDER NUMBER:</span> {idSale}</p>
            <p><span className="font-bold">TOTAL:</span> ${total}</p>
        </div>
    )
}

export default OrderInfo 