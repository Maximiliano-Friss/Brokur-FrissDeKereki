import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div className='flex justify-evenly w-3/4 mx-auto items-stretch' >
            {items.map((item) => <Item key={item.id} toyTitle={item.title} toyImg={item.pictureURL} toyPrice={item.price} toyDescription={item.description}/>)}
        </div>
    )
}

export default ItemList
