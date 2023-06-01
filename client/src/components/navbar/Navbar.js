import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routes";

import './style.scss'
const Navbar = ({ activePage }) => {
    return (
        <nav >
            <ul className='app-nav'>
                <NavLink to={ROUTES.app} className={activePage === '/' ? 'active' : null}>
                    Shop
                </NavLink>

                <NavLink to={ROUTES.cart} className={activePage === '/cart' ? 'active' : null}>
                    Cart
                </NavLink>

                <NavLink to={ROUTES.history} className={activePage === '/history' ? 'active' : null}>
                    History
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;