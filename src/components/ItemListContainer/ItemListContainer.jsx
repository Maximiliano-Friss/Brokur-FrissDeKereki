import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import GridLoader from 'react-spinners/GridLoader'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'
import "./ItemListContainer.css"

const ItemListContainer = ({message}) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const {categoryType} = useParams();

    useEffect(() => {
        setLoading(true);
        const productCollection = collection(db, 'products');
        const q = query(productCollection, where('productCategory', '==', {categoryType}))
        getDocs(categoryType ? q : productCollection)
        .then(result => {
            const productList = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            console.log(productList)
        })
        .catch (err => {
            setError(true);
            alert(err);
        })
        .finally(() => setLoading(false));



    //     const getProducts = async() => {
    //         try {
    //             const response = await fetch(URL)
    //             const data = await response.json();
    //             setProducts(data);
    //         }
    //         catch (err) {
    //             setError(true);
    //             alert(err);
    //         }
    //         finally {
    //             setLoading(false);
    //         }
    //     }
    //     getProducts();
    }, [categoryType, URL])

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