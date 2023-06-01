import './style.scss';
import success from './success.svg'
const OrderThanks = () => {
    return (
        <div className="thanks-order-wrapper">
            
            <img src={success} />

            <div className="order-thanks-text">
                <h1>Замовлення пройшло успішно</h1>
                <p>
                    Очікуйте на доставку
                </p>
            </div>
            
        </div>
    );
};

export default OrderThanks;