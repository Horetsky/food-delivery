import {
    Header,
    OrderMap,
    OrderForm,
    OrderList
} from '../../modules'

import './style.scss'
const Cart = () => {
    return (
        <div>
            <Header />
            <div className='app-main-container order-container'>
                <div className='order-form'>
                    <OrderMap />
                    {/* <OrderForm /> */}
                </div>
                <OrderList />
            </div>
        </div>
    );
};

export default Cart;