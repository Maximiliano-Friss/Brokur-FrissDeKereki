import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({item}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    
    return (
        <div className="grid grid-cols-2 gap-5">
            <img className="w-50" src={item.pictureURL} alt={item.title} />
            <div className="text-center">
                <h2 id='h2-title'>{item.title}</h2>
                <h3 id="h3-price">${item.price}</h3>
                <h4 id='h4-description'>{item.description}</h4>
                <ItemCount initial={0} stock={5} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail