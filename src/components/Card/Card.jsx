import {PlusIcon} from '@heroicons/react/24/solid';


function Card(props) {
    const {product} = props;
    return(
        <div className="bg-white cursor-pointer w-55 h-60">
            <div className='top-0 right-0 flex justify-center bg-black items-center w-6 h-6 rounded-full m-2 p-1'>
                <PlusIcon className='h-6 w-6 text-white'/>
            </div>
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs mt-2 p-1">Product 1</span>
                <img className="w-full h-full object-cover rounded-lg" src={product.image} alt="" />
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.name_product}</span>
                <span className="text-sm font-medium">{product.price}</span>
            </p>
        </div>
    )
}
export default Card