import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

import useAuth from '../../utils/useAuth';

import './style.scss'
const Cart = ({ sum, count }) => {
    const { logOut } = useAuth();
    return (
        <div className="cart-wrapper">
            <NavLink to={ROUTES.cart}>
                <div className="header-cart">
                    <div className="cart-sum">
                        {sum} грн
                    </div>
                    <div className="cart-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="cart">
                            <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                        </svg>
                        {count}
                    </div>
                </div>
            </NavLink>

            <button 
                className="logout-btn"
                onClick={() => logOut()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logout" >
                    <path d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Cart;