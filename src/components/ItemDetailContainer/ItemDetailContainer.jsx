import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.jsx'
import GridLoader from 'react-spinners/GridLoader'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getOneProduct = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/15')
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
        getOneProduct();
    }, [])

    return (
        <div className="mx-auto w-3/4 mt-5 item-detail-container">
            {loading? <div className='flex justify-center items-center h-screen'><GridLoader color={'#EF5818'} size={40} /></div> :
            error ? <p>Ha ocurrido un error</p> : //CAMBIARLO POR COMPONENTE QUE MUESTRE ERROR
            <ItemDetail selectedProduct={selectedProduct} />
            }
        </div>
    )
}

export default ItemDetailContainer