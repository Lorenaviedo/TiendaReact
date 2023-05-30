import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { contextProvider } from "../Context/index.jsx";

const ProductDetail = () => {
    const context = useContext(contextProvider);
    return (
        <aside className={`${context.isDetailOpen ? 'flex':'hidden'} 
                    flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon onClick={context.closeDetail} className="h-6 w-6 text-black-500 cursor-pointer" />
                </div>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src="" alt="" />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-sxl mb-2">Price</span>
                <span className="font-medium text-md">Name Product</span>
                <span className="font-medium text-sm">Description</span>
            </p>
            <div></div>
        </aside>
    )
}

export default ProductDetail;