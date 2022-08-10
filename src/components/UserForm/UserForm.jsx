import { useContext, useState} from "react"
import { contextoCart } from '../../context/CartContext'
import OrderInfo from './OrderInfo'
import {db} from '../../firebase/firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { useForm } from "react-hook-form";

const UserForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {products} = useContext(contextoCart);
    const {total} = useContext(contextoCart);
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
    const [idSale, setIdSale] = useState('');
    const [saleTotal, setSaleTotal] = useState('');
    const [saleProducts, setSaleProducts] = useState([]);
    const saleInfo = {
        items: products,
        date: serverTimestamp(),
        total: total,
    }

    const onSubmit = (cardInfo) => {
        const salesCollection = collection(db, 'sales');
        addDoc(salesCollection, {...saleInfo, cardInfo})
        .then((result) => {
            setIdSale(result.id);
            setSaleTotal(total);
            setSaleProducts(products);
        })
        setPurchaseConfirmed(true);
    }

    return (
            <div className='mx-auto text-center'>
                {purchaseConfirmed ?
                <OrderInfo idSale={idSale} total={saleTotal} products={saleProducts}/>
                :
                <>
                    <h2>Please, fill the blanks with your card information.</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <label>Name on card:</label>
                        <input type='text' {...register("cardName", {required: 'Please enter the name as shown on the card'})} />
                        <p>{errors.cardName?.message}</p>
                        <label>Card number:</label>
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" maxLength={16} {...register("cardNumber", {valueAsNumber:true, required: 'Please enter the card number'})} />
                        <p>{errors.cardNumber?.message}</p>
                        <div className="flex flex-row mt-5 justify-evenly">
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label>Expiration Date:</label>
                                <input type="month" min="2022-08" {...register("cardExpiration", {required: 'Please enter the card expiration date'})} />
                                <p>{errors.cardExpiration?.message}</p>
                            </div>
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label>CVV:</label>
                                <input type="text" placeholder="XXX" maxLength={3} {...register("cardCVV", {required: 'Please enter the Card Verification Value', valueAsNumber: true, minLength:3, maxLength: 3})} />
                                <p>{errors.cardCVV?.message}</p>
                            </div>
                        </div>
                        <input type='submit' className='form-submit' value='Confirm'></input>
                    </form>
                </>
                }
        </div>
    )
}

export default UserForm