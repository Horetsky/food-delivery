const defaultState = {
    orderSum: 0,
    shopLock: 'none',
    orderList: []
}

export const orderListSlice = (state = defaultState, action) => {
    switch (action.type) {
        case"SET_ORDER_ITEM":
            return {...state, orderList: [...state.orderList, action.payload]}
        case"REMOVE_ORDER_ITEM":
            return {...state, orderList: action.payload}
        case"SET_ORDER_SUM":
            return {...state, orderSum: action.payload};
        case"SET_SHOP_LOCK":
            return {...state, shopLock: action.payload};
        default: return state
    }
}