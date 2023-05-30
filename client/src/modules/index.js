import Header from "./header/Header";
import FoodList from "./foodList/FoodList";
import ProductFilters from "./filters/ProductFilters";
import { productFilters } from "./filters/helpers/reducer";

import OrderMap from "./orderMap/OrderMap";
import OrderForm from "./orderForm/OrderForm";
import OrderList from "./orderList/OrderList";
import { orderListSlice } from "./orderList/helpers/reducer";

export {
    Header,
    FoodList,
    ProductFilters,
    productFilters,

    OrderMap,
    OrderForm,
    OrderList,
    orderListSlice
}