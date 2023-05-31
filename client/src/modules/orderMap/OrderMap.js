import { useDispatch, useSelector } from 'react-redux';

import './style.scss'

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
const OrderMap = () => {
    return (
        <div className='order-form-side'>
            <div className='order-map'>
                {
                    true ? <Map /> : null
                }
            </div>
            {
                    true ? <OrderForm /> : null                
            }
        </div>
    );
};

const Map = () => {
    return (
       <>map</>
    )
}

const OrderForm = () => {
    const dispatch = useDispatch()
    return (
        <form
            className='order-form'
        >
            <div className="order-input-item">
                <span>Адреса</span>
                <div className="order-location">
                        <input placeholder='Адреса'/>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="navigation"><g data-name="Layer 2"><g data-name="navigation-2"><rect width="24" height="24" opacity="0"></rect><path d="M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68z"></path></g></g></svg>
                </div>
            </div>
            <div className="order-input-item">
                <span>Email</span>
                <input placeholder='Email'/>
            </div>
            <div className="order-input-item">
                <span>Номер телефону</span>
                <input placeholder='Телефон'/>
            </div>
            <div className="order-input-item">
                <span>Ім'я</span>
                <input placeholder="Ім'я"/>
            </div>
            
            <button>Замовити</button>
            
        </form>
    )
}

export default OrderMap;