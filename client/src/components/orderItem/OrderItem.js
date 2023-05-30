import OrderCounter from "../orderCounter/OrderCounter";
import './style.scss'
const OrderItem = ({ name, price, thumbnail, count }) => {
    return (
        <div className='order-item'>
            <div className="order-item-info">
                <div className="order-item-img">
                    <img src={thumbnail}/>
                </div>
                <OrderCounter count={count}/>
                <h1 className="order-name">{name}</h1>
            </div>
            <span className="order-item-price">{price} грн</span>
        </div>
    );
};

export default OrderItem;