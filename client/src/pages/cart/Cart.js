import {
    Header,
    OrderMap,
    OrderForm,
    OrderList
} from '../../modules'

import './style.scss'
const Cart = () => {
    return (
        <div className='order-container'>
            <div className='order-form'>
                <OrderMap />
            </div>
            <OrderList />
        </div>
    );
};

export default Cart;