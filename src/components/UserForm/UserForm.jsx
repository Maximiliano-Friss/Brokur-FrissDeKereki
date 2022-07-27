import { useContext, useState} from "react"
import { contextoCart } from '../../context/CartContext'
import {db} from '../../firebase/firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const UserForm = () => {
    const {products} = useContext(contextoCart);
    const {total} = useContext(contextoCart);
    const {clear} = useContext(contextoCart);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
    const [idVenta, setIdVenta] = useState('');
    
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
            setIdVenta(result.id);
        })
        setPurchaseConfirmed(true);
        clear();
    }

    return (
            <div className='mx-auto text-center'>
                {purchaseConfirmed ?
                <div className="order-info-container">
                    <h2>Thank you for your purchase!</h2>
                    <h3 className="mt-5">Here is some relevant information about your order.</h3>
                    <p>
                        <span className="font-bold">ID ORDER NUMBER:</span> {idVenta}
                    </p>
                </div>
                :
                <>
                    <h2>Please, fill the blanks with your card information.</h2>
                    <form className="flex flex-col">
                        <label htmlFor="cardName">Name on card:</label>
                        <input type="text" required onChange={getCardName} id="cardName" name="cardName"/>
                        <label htmlFor="cardNumber">Card number:</label>
                        <input type="tel" inputmode="numeric" pattern="[0-9]" maxlength="16" placeholder="xxxx xxxx xxxx xxxx" onChange={getCardNumber} id="cardNumber" name="cardNumber"/>
                        <div className="flex flex-row mt-5 justify-evenly">
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label htmlFor="CardExpiration">Expiration Date:</label>
                                <input type="month" onChange={getCardExpiration} id="CardExpiration" name="CardExpiration" min="2022-08"/>
                            </div>
                            <div className="w-1/2 flex flex-col form-credit mx-1">
                                <label htmlFor="cardCVV">CVV:</label>
                                <input onChange={getCardCVV} id="cardCVV" name="cardCVV" type="tel" inputmode="numeric" pattern="[0-9]" maxlength="3" placeholder="xxx"/>
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