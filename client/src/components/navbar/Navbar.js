import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routes";

import './style.scss'
const Navbar = ({activePage}) => {
    return (
        <nav >
            <ul className='app-nav'>
                <NavLink to={ROUTES.app}>
                    Shop
                </NavLink>

                <NavLink to={ROUTES.cart} >
                    Cart
                </NavLink>

                <NavLink to={ROUTES.history} >
                    History
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;