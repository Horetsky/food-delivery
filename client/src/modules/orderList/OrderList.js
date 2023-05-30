import { useSelector } from "react-redux";
import OrderItem from "../../components/orderItem/OrderItem";

import './style.scss';

const OrderList = () => {
    const {
        orderList
    } = useSelector(state => state.orderListSlice)
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
                        count={1}
                    />
                ))
            }
        </div>
    );
};

export default OrderList;