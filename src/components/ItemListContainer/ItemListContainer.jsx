import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import "./ItemListContainer.css"
import GridLoader from 'react-spinners/GridLoader'
import ivaldiImage from '../../assets/Ivaldi.png'
import freyaImage from '../../assets/Freya.png'
import skadiImage from '../../assets/Skadi.png'

const productos = [
    {id:0, title: 'Ivaldi', description:'Laberinto', price: 390, pictureURL: ivaldiImage},
    {id:1, title: 'Freya', description:'Caja', price: 350, pictureURL: freyaImage},
    {id:2, title: 'Skadi', description:'Puzzle', price: 450, pictureURL: skadiImage},
]

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
            console.log('Algo salió mal')
        })
    }, [])

    return (        
        <div className='flex justify-center flex-col'>
            {loading? <div className='flex justify-center items-center h-screen'><GridLoader color={'#Ef5818'} size={40} /></div> :
            <>
                <h2>{message}</h2>
                <ItemList items={toys} />
            </>
            }
        </div>
    )
}

export default ItemListContainer