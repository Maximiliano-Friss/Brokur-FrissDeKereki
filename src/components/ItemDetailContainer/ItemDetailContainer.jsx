import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.jsx'
import GridLoader from 'react-spinners/GridLoader'
import './ItemDetailContainer.css'
const productos = JSON.parse(localStorage.getItem('productList'))

const promesa = new Promise ((res,rej) => {

    setTimeout(() => {
        res(productos);
    }, 2000);
})

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [pickItem, setPickItem] = useState([]);

    useEffect(() => {
        setLoading(true);
        promesa.then((data) => {
            setPickItem(data[0]);
            setLoading(false);
        }).catch(() => {
            alert('Algo salió mal')
        })
    }, [])

    return (
        <div className="mx-auto w-3/4 mt-5 item-detail-container">
            {loading? <div className='flex justify-center items-center h-screen'><GridLoader color={'#EF5818'} size={40} /></div> :
            <ItemDetail item={pickItem} />
            }
        </div>
    )
}

export default ItemDetailContainer