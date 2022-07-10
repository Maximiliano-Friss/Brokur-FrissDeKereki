import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"

const Item = ({productTitle, productPrice, productImage, productDescription, productId}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    return (
        <div className='item-card rounded-md'>
            <div className='my-auto'>
                <Link to={`/products/${productId}`}>
                    <div className='flex flex-col justify-around items-center'>
                        <div className='img-container'>
                            <img src={productImage} alt={productTitle}></img>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='pb-5 flex flex-col items-center'>
                <h3 className='item-card-h3'>{productTitle}</h3>
                <h4>${productPrice}</h4>
                <ItemCount initial={0} stock={5} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default Item