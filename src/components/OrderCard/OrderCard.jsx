const OrderCard = (props) => {
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img src={props.image} className="w-full h-full rounded-lg object-cover" alt={props.name_product}/>
                </figure>
                <p className="text-sm font-light">{props.name_product}</p>
            </div>
            <div className="flex items-center gap-2">
                <p>{props.price}</p>
            </div>
        </div>
    );
};

export default OrderCard;