import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.jsx'
import GridLoader from 'react-spinners/GridLoader'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState([])
    const {productId} = useParams();
    const URL = productId
    ? `https://fakestoreapi.com/products/${productId}`
    : 'https://fakestoreapi.com/products';

    useEffect(() => {
        setLoading(true);
        const getSelectedProduct = async() => {
            try {
                const response = await fetch(URL)
                const data = await response.json();
                setSelectedProduct(data);
            }
            catch (err) {
                setError(true);
                alert(err);
            }
            finally {
                setLoading(false);
            }
        }
        getSelectedProduct();
    }, [productId, URL])

    return (
        <div className="mx-auto w-3/4 mt-5 item-detail-container rounded-md">
            {loading? <div className='flex justify-center items-center h-screen'><GridLoader color={'#EF5818'} size={40} /></div> :
            error ? <p>Ha ocurrido un error</p> : //CAMBIARLO LUEGO POR COMPONENTE QUE MUESTRE ERROR
            <ItemDetail selectedProduct={selectedProduct} />
            }
        </div>
    )
}

export default ItemDetailContainer