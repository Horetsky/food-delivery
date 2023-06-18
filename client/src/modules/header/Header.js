import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Cart from "../../components/cart/Cart";

import './style.scss'
const Header = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {
        orderList,
        orderSum
    } = useSelector(state => state.orderListSlice)
    useEffect(() => {
        dispatch({type: "SET_ORDER_SUM", payload: orderList.reduce((acc, item) => acc + item.price, 0)})
    }, [orderList])
    return (
        <div className="app-header">
            <div className="logo-nav-wrapper">
                <NavLink to={ROUTES.app}>
                    <Logo />
                </NavLink>
                <Navbar activePage={location.pathname}/>
            </div>
            
            <Cart 
                sum={orderSum}
                count={orderList.length}
            />

        </div>
    );
};

export default Header;