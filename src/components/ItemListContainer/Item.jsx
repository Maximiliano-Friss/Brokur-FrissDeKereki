import { Link } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"

const Item = ({productTitle, productPrice, productImage, productDescription, productId}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    return (
        <div className='item-card rounded-md py-3'>
            <h3 className='text-2xl mb-5'>{productTitle}</h3>
            <img className='w-3/5 rounded-lg' src={productImage} alt={productTitle}></img>
            <h4>${productPrice}</h4>
            <h5 className='italic mb-5'>{productDescription}</h5>
            {/* <Link key={productId} to={productId}><ItemDetailContainer />Ver más información</Link> */}
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default Item