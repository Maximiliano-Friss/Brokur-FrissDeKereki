import { useEffect, useContext } from 'react';
import { contextoCart } from '../../context/CartContext'

const OrderInfo = ({idSale, total, products}) => {
    const {clear} = useContext(contextoCart);
    
    useEffect(() => {
        clear();
    }, [])

    return (
        <div className="order-info-container">
            <h2 className='text-4xl'>Thank you for your purchase!</h2>
            <h3 className="mt-5">Here is some relevant information about your order.</h3>
            <div className='mx-auto my-2 w-96 text-left'>
                <p><span className="font-bold">ID ORDER NUMBER:</span> {idSale}</p>
                <p><span className="font-bold">TOTAL:</span> ${total}</p>
                <p><span className="font-bold">Order details:</span> ${total}</p>
            </div>
            <ul>
                    {products.map((product, index) => (
                        <li key={index} >
                            <div className='order-info-details rounded-md w-96'>
                                <img className='order-info-img' src={product.image} alt={product.title}></img>
                                <div className='w-24 flex flex-col justify-center'>
                                    <p className='text-2xl text-left'>{product.title}</p>
                                    <p className='text-right'>X {product.qty} unit/s </p>
                                </div>
                            </div>
                        </li>
                        ) )}
            </ul>
        </div>
    )
}

export default OrderInfo 