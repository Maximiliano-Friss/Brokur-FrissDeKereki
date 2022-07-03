import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import "./ItemListContainer.css"
import GridLoader from 'react-spinners/GridLoader'

const productos = JSON.parse(localStorage.getItem('productList'))

const promesa = new Promise ((res,rej) => {

    setTimeout(() => {
        res(productos);
    }, 2000);
})

const ItemListContainer = ({message}) => {
    const [loading, setLoading] = useState(false)
    const [toys, setToys] = useState([]);

    useEffect(() => {
        setLoading(true);
        promesa.then((data) => {
            setToys(data);
            setLoading(false);
        }).catch(() => {
            alert('Algo salió mal')
        })
    }, [])

    return (        
        <div className='flex justify-center flex-col'>
            {loading? <div className='flex justify-center items-center h-screen'><GridLoader color={'#EF5818'} size={40} /></div> :
            <>
                <h2>{message}</h2>
                <ItemList items={toys} />
            </>
            }
        </div>
    )
}

export default ItemListContainer