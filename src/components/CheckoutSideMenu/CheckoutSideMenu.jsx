import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../OrderCard/OrderCard.jsx";
import { useContext } from "react";
import { contextProvider } from "../Context/index.jsx";
import {totalPrice} from "../../utils/index.js"

const CheckoutSideMenu = () => {
    const context = useContext(contextProvider);
    return (
        <aside className={`${context.isCheckoutOpen ? 'flex':'hidden'} 
                    flex-col fixed right-0 z-20 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Mi orden</h2>
                <div>
                    <XMarkIcon onClick={context.closeCheckout} className="h-6 w-6 text-black-500 cursor-pointer" />
                </div>
            </div>
            <div className="p-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map((product)=> (
                        <OrderCard key={product.id} {...product} />
                    ))
                }
            </div>
            <div className="px-6 mb-4">
                <p className="flex justify-between items-center mb-2">
                    <span>Total</span>
                    <span>$ {totalPrice(context.cartProducts)}</span>
                </p>
            </div>
            <button className="w-full bg-black py-3 text-white rounded-lg">Checkout</button>
        </aside>
    )
}

export default CheckoutSideMenu;