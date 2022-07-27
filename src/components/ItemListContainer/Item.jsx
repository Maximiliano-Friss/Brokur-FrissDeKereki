import { Link } from 'react-router-dom';

const Item = ({productTitle, productPrice, productImage, productId}) => {
    
    return (
        <div className='item-card rounded-md'>
            <div className='my-auto'>
                <Link to={`/products/${productId}`}>
                    <div className='flex flex-col justify-around items-center'>
                        <div className='img-container'>
                            <img src={productImage} alt={productTitle}></img>
                        </div>
                    </div>
                    <div className='pb-5 flex flex-col items-center'>
                        <h3 className='item-card-h3'>{productTitle}</h3>
                    </div>
                </Link>
            </div>
            <h4 className='text-center'>${productPrice}</h4>
        </div>
    )
}

export default Item