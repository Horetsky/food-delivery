import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';

import {
    Home,
    Cart,
    HistoryPage
} from '../pages'

export const AppRouterProvider = createBrowserRouter([
    {
        path: ROUTES.app,
        element: <Home />
    },
    {
        path: ROUTES.cart,
        element: <Cart />
    },
    {
        path: ROUTES.history,
        element: <HistoryPage />
    }
])