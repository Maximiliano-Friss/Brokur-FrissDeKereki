import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import "./ItemListContainer.css"
import GridLoader from 'react-spinners/GridLoader'

const productos = [
    {id:0, title: 'Ivaldi', description:'Laberinto', price: 390, pictureURL: './assets/Ivaldi.png'},
    {id:1, title: 'Freya', description:'Caja', price: 350, pictureURL: '../../assets/Freya.png'},
    {id:2, title: 'Skadi', description:'Puzzle', price: 450, pictureURL: '../../assets/Skadi.png'},
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
        <>
            {loading? <GridLoader /> :
            <>
                <h2>{message}</h2>
                <ItemList items={toys} />
            </>
            }
        </>
    )
}

export default ItemListContainer