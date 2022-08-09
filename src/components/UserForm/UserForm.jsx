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
            setSaleTotal(total)
        })
        setPurchaseConfirmed(true);
    }



    return (
            <div className='mx-auto text-center'>
                {purchaseConfirmed ?
                <OrderInfo idSale={idSale} total={saleTotal} products={products}/>
                :
                <>
                    <h2>Please, fill the blanks with your card information.</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <label>Name on card:</label>
                        <input type='text' {...register("cardName", {required: true})} />
                        {errors.cardName?.type === 'required' && "Please enter the name as shown on the card"}
                        {/* value={cardName} type="text" required onChange={getCardName} id="cardName" name="cardName" */}
                        <label>Card number:</label>
                        <input type="number" placeholder="XXXX XXXX XXXX XXXX"  {...register("cardNumber", {required: true, valueAsNumber: true, maxLength: 16})} />
                        {/* <input value={cardNumber} type="tel" inputMode="numeric" pattern="[0-9]" maxLength="16" placeholder="xxxx xxxx xxxx xxxx" onChange={getCardNumber} id="cardNumber" name="cardNumber"/> */}
                        <div className="flex flex-row mt-5 justify-evenly">
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label>Expiration Date:</label>
                                <input type="month" {...register("cardExpiration", {required: true, valueAsDate: true})} />
                                {/* <input value={cardExpiration} type="month" onChange={getCardExpiration} id="CardExpiration" name="CardExpiration" min="2022-08"/> */}
                            </div>
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label>CVV:</label>
                                <input type="number" placeholder="XXX" {...register("cardCVV", {required: true, valueAsNumber: true, minLength:3, maxLength: 3})} />
                                {/* <input value={cardCVV} onChange={getCardCVV} id="cardCVV" name="cardCVV" type="tel" inputMode="numeric" pattern="[0-9]" maxLength="3" placeholder="xxx"/> */}
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