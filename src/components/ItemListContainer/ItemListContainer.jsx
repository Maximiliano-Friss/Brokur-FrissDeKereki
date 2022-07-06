import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import "./ItemListContainer.css"
import GridLoader from 'react-spinners/GridLoader'

const ItemListContainer = ({message}) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getProducts = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=5')
                const data = await response.json();
                setProducts(data);
            }
            catch (err) {
                setError(true);
                alert(err);
            }
            finally {
                setLoading(false);
            }
        }
        getProducts();
    }, [])

    return (        
        <div className='flex justify-center flex-col'>
            {loading? <div className='flex justify-center items-center h-screen'><GridLoader color={'#EF5818'} size={40} /></div> :
            error ? <p>Ha ocurrido un error</p> : //CAMBIARLO POR COMPONENTE QUE MUESTRE ERROR
            <>
                <h2>{message}</h2>
                <ItemList products={products} />
            </>
            }
        </div>
    )
}

export default ItemListContainer