import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../../components/orderItem/OrderItem";

import './style.scss';

const OrderList = () => {
    const [orderSum, setOrderSum]= useState(0)
    const dispatch = useDispatch()
    
    const {
        orderList
    } = useSelector(state => state.orderListSlice)

    useEffect(() => {
        setOrderSum(orderList.reduce((acc, item) => acc + item.price, 0))
        if (orderList.length === 0) {
            dispatch({type: "SET_SHOP_LOCK", payload: 'none'})
        } 
    }, [orderList])

    useEffect(() => {
        dispatch({type: "SET_ORDER_SUM", payload: orderSum})
    }, [orderSum])

    const delOrderItem = (prop) => {
        dispatch({type:"REMOVE_ORDER_ITEM", payload: orderList.filter(item => item.id !== prop)})
    }
    return (
        <div className="order-list-wrapper">
            {
                orderList?.map(item => (
                    <OrderItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        thumbnail={item.thumbnail}
                        sumCount={sum => setOrderSum(orderSum + sum)}
                        delItemFunc={delOrderItem}
                    />
                ))
            }
        </div>
    );
};

export default OrderList;