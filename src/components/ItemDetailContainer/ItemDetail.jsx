import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({selectedProduct}) => {
    
    const onAdd = () => {
        alert('Tus productos se agregaron al carrito con éxito')
    }
    
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="text-center flex flex-col justify-center items-center pb-5">
                <img className="w-3/4" src={selectedProduct.image} alt={selectedProduct.title} />
                <h3 id="h3-price">${selectedProduct.price}</h3>
            </div>
            <div className="text-center item-detail pb-5">
                <h2 id='h2-title'>{selectedProduct.title}</h2>
                <h4 id='h4-description'>{selectedProduct.description}</h4>
                <ItemCount initial={0} stock={5} onAdd={onAdd} ></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail