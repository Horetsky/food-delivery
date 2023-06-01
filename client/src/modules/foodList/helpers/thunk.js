import {
    transformFoodItems
} from '../../../utils/_transformData';

export const fetchFoodList = (request) => async(dispatch) => {
    dispatch(setLoadingStatus('loading'))
    try {
        const shops = await request('http://localhost:5000/shops')
                                .then(res => res.map(item => ({
                                    id: item.id,
                                    name: item.name,
                                    location: item.location.map(loc => ({lat: +loc.split(', ')[0], lng: +loc.split(', ')[1]}))
                                })));
        const food = await request('http://localhost:5000/products')
                                .then(res => res.map(item => transformFoodItems(item, shops)))
        dispatch(setData(food))
        dispatch(setLoadingStatus('idle'));
        dispatch(setReloadRule(false))
    } catch {
        dispatch(setLoadingStatus('error'))
    }
}

const setData = (data) => ({type: "SET_FOOD_LIST_DATA", payload: data});
const setLoadingStatus = (status) => ({type: "SET_FOOD_LIST_LOADING", payload: status});
const setReloadRule = (rule) => ({type: "SET_FOOD_LIST_RELOAD", payload: rule});