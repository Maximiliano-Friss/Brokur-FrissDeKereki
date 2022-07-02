import ItemCount from './ItemCount'
import "./ItemListContainer.css"

const Item = ({toyTitle, toyImg, toyPrice, toyDescription}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    return (
        <div className='item-card rounded-md py-3'>
            <h3 className='text-2xl mb-5'>{toyTitle}</h3>
            <img className='w-3/5 rounded-lg' src={toyImg} alt={toyTitle}></img>
            <h4>${toyPrice}</h4>
            <h5 className='italic mb-5'>{toyDescription}</h5>
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default Item