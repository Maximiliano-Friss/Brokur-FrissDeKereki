import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({selectedProduct}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    
    return (
        <div className="grid grid-cols-2 gap-5">
            <img className="w-50" src={selectedProduct.image} alt={selectedProduct.title} />
            <div className="text-center">
                <h2 id='h2-title'>{selectedProduct.title}</h2>
                <h3 id="h3-price">${selectedProduct.price}</h3>
                <h4 id='h4-description'>{selectedProduct.description}</h4>
                <ItemCount initial={0} stock={5} onAdd={onAdd} ></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail