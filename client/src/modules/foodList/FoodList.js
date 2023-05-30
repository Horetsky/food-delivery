import { useEffect, useState } from "react";
import { transformFoodItems } from "../../utils/_transformData";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import useHttp from "../../utils/useHttps";

import './style.scss'

const FoodList = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const dispatch = useDispatch()
    const {
        activeFilter
    } = useSelector(state => state.productFilters)
    const {
        orderList
    } = useSelector(state => state.orderListSlice)
    const { getRequest } = useHttp()

    useEffect(() => {
        getFoodItems()
    }, [])

    useEffect(() => {
        filterProducts()
    }, [activeFilter])

    useEffect(() => {

    }, [orderList])

    const filterProducts = () => {
        if(activeFilter === 'all') {
            setFilteredItems([])
        }
        setFilteredItems(foodItems.filter(item => item.shop[0].name === activeFilter))
    }

    const getFoodItems = async () => {
        const shops = await getRequest('http://localhost:5000/shops')
                                .then(res => res.map(item => ({
                                    id: item.id,
                                    name: item.name
                                })))
        getRequest('http://localhost:5000/products')
            .then(res => res.map(item => transformFoodItems(item, shops)))
            .then(setFoodItems)
            
    }

    const setOrder = (prop, isOrdered) => {
        if (isOrdered) {
            dispatch({type:"REMOVE_ORDER_ITEM", payload: orderList.filter(item => item.id !== prop.id)})
        } else {
            dispatch({type: "SET_ORDER_ITEM", payload: prop})
        }
    }
    
    return (
        <div className="app-main-container food-list">
                {
                    filteredItems.length === 0 ?
                    foodItems.map(item => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            shop={item.shop}
                            thumbnail={item.thumbnail}
                            price={item.price}
                            func={setOrder}
                            isOrdered={orderList.filter(order => order.id === item.id).length > 0}
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
                        />
                    ))
                }
        </div>
    );
};

export default FoodList;