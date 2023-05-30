import { useState } from "react";
import { createContext } from "react";

const contextProvider = createContext({});

const ContextShoping = ({children}) => {
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    const openCheckout = () => {
        setCheckoutOpen(true);
    } 
    const closeCheckout = () => {
        setCheckoutOpen(false);
    }
    return(
        <contextProvider.Provider value={{
            count, setCount,
            cartProducts, setCartProducts, 
            isCheckoutOpen, openCheckout, closeCheckout
            }}>
                {children}
        </contextProvider.Provider>
    )
}

export {contextProvider, ContextShoping};