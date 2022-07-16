import { useContext } from "react"
import { contextoCart } from '../../context/CartContext'
import nothingToSeeHere from '../../assets/nothingToSeeHere.gif'
import CartItemList from './CartItemList.jsx'
import { Link } from "react-router-dom"

const Cart = () => {
    const {products} = useContext(contextoCart);

    return (
        <div className='mx-auto text-center'>
            {products.length === 0 ?
            <>
                <h2 className="mt-3">Aún no hay nada aquí... <Link to='/'><p>Volver al Inicio</p></Link></h2>
                <img className="mx-auto w-1/3" src={nothingToSeeHere} alt='Aquí no hay nada que ver' />
            </> :
            <CartItemList />}
        </div>
    )
}

export default Cart
