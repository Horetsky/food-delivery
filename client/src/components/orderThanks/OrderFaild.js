import './style.scss'
import faild from './faild.svg'
const OrderFaild = () => {
    return (
        <div className="thanks-order-wrapper">
            
            <img src={faild} />

            <div className="order-thanks-text">
                <h1>Упс... Сталася помилка</h1>
                <p>
                    Спробуйте пізніше
                </p>
            </div>
            
        </div>
    );
};

export default OrderFaild;