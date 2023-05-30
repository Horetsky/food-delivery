import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Cart from "../../components/cart/Cart";

import './style.scss'
const Header = () => {
    const [cartSum, setCartSum] = useState(0)
    const {
        orderList
    } = useSelector(state => state.orderListSlice)

    useEffect(() => {
        setCartSum(orderList.reduce((acc, item) => acc + item.price, 0))
    }, [orderList])
    return (
        <div className="app-main-container app-header">
            <div className="logo-nav-wrapper">
                <NavLink to={ROUTES.app}>
                    <Logo />
                </NavLink>
                <Navbar activePage='cart'/>
            </div>
            <NavLink to={ROUTES.cart}>
                <Cart 
                    sum={cartSum}
                    count={orderList.length}
                />
            </NavLink>
        </div>
    );
};

export default Header;