import {
    transformOrderHistory
} from '../../../utils/_transformData'

export const fetchOrderHistory = (request, number) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const orderHistory = await request('orderHistory')
                            .then(res => res.filter(item => item.order.user.phone.includes(number) && number > 0))
                            .then(data => data.map(transformOrderHistory))

        dispatch(setData(orderHistory))
        dispatch(setLoadingStatus('idle'));
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_ORDER_HISTORY_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_ORDER_HISTORY_LOADING", payload: status});