import {PlusIcon} from '@heroicons/react/24/solid';
import { useState } from 'react';

function Card(props) {
    const {product} = props;

    const [state, setState] = useState(0)

    const handleCount = () => {
        setState(state + 1) /* para que cambie el estado para el carrito de compras*/
    }
    return(
        <div className="cursor-pointer w-55 h-60 border rounded-lg">
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs mt-2 p-1">
                    {product.category.name_category}
                </span>
                <img className="rounded-lg w-full h-full object-cover" src={product.image} alt="" />
                <div className='absolute top-0 right-0 flex justify-center bg-black items-center w-6 h-6 rounded-full m-2 p-1'>
                    <PlusIcon className='h-6 w-6 text-white'/>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.name_product}</span>
                <span className="text-sm font-medium">{product.price}</span>
            </p>
        </div>
    )
}
export default Card