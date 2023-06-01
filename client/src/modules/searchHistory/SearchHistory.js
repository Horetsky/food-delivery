import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderHistory } from './helpers/thunk';
import ProductCard from '../../components/productCard/ProductCard'
import useHttp from '../../utils/useHttps';

import './style.scss'

const SearchHistory = () => {
    const [searchVal, setSearchVal] = useState('');
    const dispatch = useDispatch();
    const { getRequest } = useHttp()
    useEffect(() => {
        dispatch(fetchOrderHistory(getRequest, searchVal))
    }, [searchVal])

    const {
        orderHistory
    } = useSelector(state => state.orderHistorySlice)

    return (
        <>
            <form className='history-search-form'>
            <div className="order-input-item">
                <h1 className='order-search-title'>Історія замовлень</h1>
                <span className='order-search-caption'>Введіть номер телефону, щоб ми знайшли ваші замовлення</span>
                <input placeholder='Номер телефону' required value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                />
            </div>
            </form>

            <div className='search-history-results-wrapper'>
                {
                    orderHistory.map(order => (
                        <div className='single-order-item'>
                            <div className='order-from'>
                                Замовлення із {order.shop[0].name}
                            </div>
                            <SearchResults key={order.id} items={order.foodList} />
                            <div className='history-order-total'>
                                Сплачено: {order.orderSum} грн
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

const SearchResults = ({items}) => {
    const dispatch = useDispatch();
    const {
        orderList,
        shopLock
    } = useSelector(state => state.orderListSlice)
    
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
        <div className='food-list order-history-cards'>
            {
                items?.map(item => (
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
    )
}

export default SearchHistory;