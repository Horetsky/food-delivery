import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import Cart from "../../components/cart/Cart";

import './style.scss'
const Header = () => {
    const dispatch = useDispatch()
    const {
        orderList,
        orderSum
    } = useSelector(state => state.orderListSlice)
    useEffect(() => {
        dispatch({type: "SET_ORDER_SUM", payload: orderList.reduce((acc, item) => acc + item.price, 0)})
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
                    sum={orderSum}
                    count={orderList.length}
                />
            </NavLink>
        </div>
    );
};

export default Header;