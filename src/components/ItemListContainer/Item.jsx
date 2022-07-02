import ItemCount from './ItemCount'
import "./ItemListContainer.css"

const Item = ({toyTitle, toyImg}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    return (
        <div className='item-card rounded-md'>
            <h3>{toyTitle}</h3>
            <img src={toyImg} alt={toyTitle}></img>
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default Item