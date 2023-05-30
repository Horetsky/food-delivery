const defaultState = {
    orderList: []
}

export const orderListSlice = (state = defaultState, action) => {
    switch (action.type) {
        case"SET_ORDER_ITEM":
            return {...state, orderList: [...state.orderList, action.payload]}
        case"REMOVE_ORDER_ITEM":
            return {...state, orderList: action.payload}
        default: return state
    }
}