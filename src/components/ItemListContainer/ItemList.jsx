import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div className='flex justify-evenly items-center w-3/4 mx-auto' >
            {items.map((item) => <Item key={item.id} toyTitle={item.title} toyImg={item.pictureURL} />)}
        </div>
    )
}

export default ItemList
