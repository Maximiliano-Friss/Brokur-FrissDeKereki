import { useContext, useState} from "react"
import { contextoCart } from '../../context/CartContext'
import OrderInfo from './OrderInfo'
import {db} from '../../firebase/firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const UserForm = () => {
    const {products} = useContext(contextoCart);
    const {total} = useContext(contextoCart);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
    const [idSale, setIdSale] = useState('');
    const [saleTotal, setSaleTotal] = useState('');
    
    const getCardName = (event) => {
        setCardName(event.target.value);
    }
    const getCardNumber = (event) => {
        setCardNumber(event.target.value);
    }
    const getCardExpiration = (event) => {
        setCardExpiration(event.target.value);
    }
    const getCardCVV = (event) => {
        setCardCVV(event.target.value);
    }

    const endPurchase = () => {
        const salesCollection = collection(db, 'sales');
        addDoc(salesCollection, {
            cardName: cardName,
            cardNumber: cardNumber,
            cardExpiration: cardExpiration,
            cardCVV: cardCVV,
            items: products,
            date: serverTimestamp(),
            total: total,
        })
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
                    <form className="flex flex-col">
                        <label htmlFor="cardName">Name on card:</label>
                        <input value={cardName} type="text" required onChange={getCardName} id="cardName" name="cardName"/>
                        <label htmlFor="cardNumber">Card number:</label>
                        <input value={cardNumber} type="tel" inputMode="numeric" pattern="[0-9]" maxLength="16" placeholder="xxxx xxxx xxxx xxxx" onChange={getCardNumber} id="cardNumber" name="cardNumber"/>
                        <div className="flex flex-row mt-5 justify-evenly">
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label htmlFor="CardExpiration">Expiration Date:</label>
                                <input value={cardExpiration} type="month" onChange={getCardExpiration} id="CardExpiration" name="CardExpiration" min="2022-08"/>
                            </div>
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label htmlFor="cardCVV">CVV:</label>
                                <input value={cardCVV} onChange={getCardCVV} id="cardCVV" name="cardCVV" type="tel" inputMode="numeric" pattern="[0-9]" maxLength="3" placeholder="xxx"/>
                            </div>
                        </div>
                        <submit className='form-submit' onClick={endPurchase}>Confirm</submit>
                    </form>
                </>
                }
        </div>
    )
}

export default UserForm