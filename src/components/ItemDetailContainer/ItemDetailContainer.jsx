import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.jsx'
import GridLoader from 'react-spinners/GridLoader'
import { useParams } from 'react-router-dom'
import {db} from '../../firebase/firebase';
import {getDoc, collection, doc} from 'firebase/firestore'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState([])
    const {productId} = useParams();
    
    useEffect(() => {
        setLoading(true);
        const productCollection = collection(db, 'products');
        const refDoc = doc(productCollection, productId);
        getDoc(refDoc)
        .then(result => {
            const product = {
                id: result.id,
                ...result.data(),
            }
            setSelectedProduct(product);
        })
        .catch (err => {
            setError(true);
            console.log(err);
        })
        .finally(() => setLoading(false));
    }, [productId]);

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