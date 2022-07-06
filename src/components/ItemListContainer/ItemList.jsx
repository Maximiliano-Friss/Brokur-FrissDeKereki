import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div className='w-3/4 mx-auto grid grid-cols-3 gap-5' >
            {products.map((product) => <Item key={product.id} productTitle={product.title} productPrice={product.price} productCategory={product.category} productImage={product.image} productDescription={product.description}/>)}
        </div>
    )
}

export default ItemList
