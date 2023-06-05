import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import PrivateRoute from './PrivateRoute';

import {
    Dashboard,
    Home,
    Cart,
    HistoryPage
} from '../pages'

export const AppRouterProvider = createBrowserRouter([
    {
        path: ROUTES.app,
        element: <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>,
        children: [
            {
                index: true,
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
        ]
    }

])