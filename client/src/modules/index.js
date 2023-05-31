import Header from "./header/Header";
import FoodList from "./foodList/FoodList";
import { foodListSlice } from "./foodList/helpers/reducer";

import ProductFilters from "./filters/ProductFilters";
import { productFilters } from "./filters/helpers/reducer";

import OrderMap from "./orderMap/OrderMap";
import { orderMapSlice } from "./orderMap/reducer";
import OrderList from "./orderList/OrderList";
import { orderListSlice } from "./orderList/helpers/reducer";

export {
    Header,
    FoodList,
    foodListSlice,
    ProductFilters,
    productFilters,

    OrderMap,
    orderMapSlice,

    OrderList,
    orderListSlice
}