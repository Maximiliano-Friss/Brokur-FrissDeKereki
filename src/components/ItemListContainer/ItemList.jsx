import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div className='w-3/4 mx-auto grid grid-cols-3 gap-5' >
            {items.map((item) => <Item key={item.id} toyTitle={item.title} toyImg={item.pictureURL} toyPrice={item.price} toyDescription={item.description}/>)}
        </div>
    )
}

export default ItemList

//flex justify-evenly w-3/4 mx-auto items-stretch