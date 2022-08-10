import Item from './Item';

const ItemList = ({products}) => {
    return (
        <div className='w-3/4 mx-auto grid grid-cols-4 gap-5 items-start' >
            {products.map((product) => <Item key={product.id} productId={product.id} productTitle={product.title} productPrice={product.price} productCategory={product.category} productImage={product.image}/>)}
        </div>
    )
}

export default ItemList
