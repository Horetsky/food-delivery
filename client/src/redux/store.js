import { configureStore } from '@reduxjs/toolkit';
import { general } from './reducers/general';

import {
  productFilters,
  orderListSlice
} from './../modules'
export const store = configureStore({
    reducer: {
      general,
      productFilters,
      orderListSlice
    }
  })