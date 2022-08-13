import React, {createContext, useState, useEffect} from "react"

export const contextoCart = createContext();
const {Provider} = contextoCart;
const productFromLocalStorage = JSON.parse(localStorage.getItem("products") || '[]');
const quantityFromLocalStorage = JSON.parse(localStorage.getItem("quantity") || 0);
const totalFromLocalStorage = JSON.parse(localStorage.getItem("total") || 0);

const CustomProvider = ({children}) => {
    const [products, setProducts] = useState(productFromLocalStorage);
    const [quantity, setQuantity] = useState(quantityFromLocalStorage);
    const [total, setTotal] = useState(totalFromLocalStorage);

    const getProductQuantity = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty;
        });
        setQuantity(qty);
        }
    
    const getTotal = () => {
        let amount = 0;
        products.forEach(product => {
            amount += product.price*product.qty;
        });
        setTotal(amount);
    }

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('quantity', JSON.stringify(quantity));
        localStorage.setItem('total', JSON.stringify(total));
        getProductQuantity();
        getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total, products, quantity]);

    const addProduct = (product) => {
        if(isInCart(product.id)){
            const newProducts = [...products];
            const found = newProducts.find(item => item.id === product.id);
            found.qty += product.qty;
            setProducts(newProducts);
        }else{
            setProducts([...products, product]);
        };
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    }

    const clear = () => {
        setProducts([]);
        
    }

    const isInCart = (id) => {
        return products.some(product => product.id === id);
    }

    return (
        <Provider value={{products, quantity, total, getProductQuantity, getTotal, addProduct, removeProduct, clear}}>
            {children}
        </Provider>
    )
}

export default CustomProvider