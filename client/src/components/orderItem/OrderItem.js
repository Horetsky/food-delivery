import { useState, useEffect} from "react";
import OrderCounter from "../orderCounter/OrderCounter";
import './style.scss'
const OrderItem = ({ id, name, price, thumbnail, sumCount, delItemFunc }) => {
    const [counter, setCounter] = useState(1)

    const setCountValue = (val) => {
        sumCount(price * val)
        setCounter(counter + val)
    }
    return (
        <div className='order-item'>
            <div className="order-item-info">
                <button
                    className="del-oreder-btn"
                    onClick={() => delItemFunc(id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" id="cancel" x="0" y="0" version="1.1" viewBox="0 0 29 29">
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M9.197 19.803L19.803 9.197M9.197 9.197l10.606 10.606"></path>
                    </svg>
                </button>

                <div className="order-item-img">
                    <img src={thumbnail}/>
                </div>
                <OrderCounter 
                    count={counter}
                    func={setCountValue}
                />
                <div>
                    <h1 className="order-name">{name}</h1>
                    <h3>{price} грн</h3>
                </div>
            </div>
            <span className="order-item-price">{price * counter} грн</span>
        </div>
    );
};

export default OrderItem;