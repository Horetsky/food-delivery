import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFoodList } from "./helpers/thunk";
import useHttp from "../../utils/useHttps";

import ProductCard from "../../components/productCard/ProductCard";

import './style.scss'

const FoodList = () => {
    const [filteredItems, setFilteredItems] = useState([])
    const dispatch = useDispatch()
    const { getRequest } = useHttp()

    const { 
        reload, 
        foodList 
    } = useSelector(state => state.foodListSlice)
    const {
        activeFilter
    } = useSelector(state => state.productFilters)
    const {
        orderList,
        shopLock
    } = useSelector(state => state.orderListSlice)

    useEffect(() => {
        if (!reload) return;
        dispatch(fetchFoodList(getRequest));
    }, [dispatch, reload])
    useEffect(() => {
        filterProducts()
    }, [activeFilter])
    
    const filterProducts = () => {
        if(activeFilter === 'all') {
            setFilteredItems([])
        }
        setFilteredItems(foodList.filter(item => item.shop[0].name === activeFilter))
    }

    const setOrder = (prop, isOrdered) => {
        if (isOrdered) {
            dispatch({type:"REMOVE_ORDER_ITEM", payload: orderList.filter(item => item.id !== prop.id)})
            if (orderList.length === 1) {
                dispatch({type: "SET_SHOP_LOCK", payload: 'none'})
            }
        } else {
            dispatch({type: "SET_ORDER_ITEM", payload: prop})
            dispatch({type: "SET_SHOP_LOCK", payload: prop.shop[0].id})
            dispatch({type: "SET_DESTINATION_DATA", payload: prop.shop[0]?.location})
        }
    }
    
    return (
        <div className="food-list">
                {
                    filteredItems.length === 0 ?
                    foodList.map(item => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            shop={item.shop}
                            thumbnail={item.thumbnail}
                            price={item.price}
                            func={setOrder}
                            isOrdered={orderList.filter(order => order.id === item.id).length > 0}
                            shopLock={shopLock}
                        />
                    )) : 
                    filteredItems.map(item => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            shop={item.shop}
                            thumbnail={item.thumbnail}
                            price={item.price}
                            func={setOrder}
                            isOrdered={orderList.filter(order => order.id === item.id).length > 0}
                            shopLock={shopLock}
                        />
                    ))
                }
        </div>
    );
};

export default FoodList;