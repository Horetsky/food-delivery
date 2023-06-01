import { configureStore } from '@reduxjs/toolkit';
import { general } from './reducers/general';

import {
  productFilters,
  orderListSlice,
  foodListSlice,
  orderMapSlice,
  orderHistorySlice
} from './../modules'
export const store = configureStore({
    reducer: {
      general,
      foodListSlice,
      productFilters,
      orderListSlice,
      orderMapSlice,
      orderHistorySlice
    }
  })