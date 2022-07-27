import { useContext} from "react"
import { contextoCart } from '../../context/CartContext'
import CartItemList from './CartItemList.jsx'
import { Link } from "react-router-dom"

const Cart = () => {
    const {products} = useContext(contextoCart);

    return (
        <div className='mx-auto text-center'>
            {products.length === 0 ?
            <>
                <h2 className="mt-3">The Cart is still empty... <Link to='/'><p>Click here to go back</p></Link></h2>
                <img className="mx-auto w-1/3" src='https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif' alt='Aquí no hay nada que ver' />
            </> :
            <CartItemList />}
        </div>
    )
}

export default Cart
