const defaultState = {
    orderHistory: [],
    loadingStatus: 'idle'
}

export const orderHistorySlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ORDER_HISTORY_DATA": 
            return {...state, orderHistory: action.payload};
        case "SET_ORDER_HISTORY_LOADING":
            return {...state, loadingStatus: action.payload}

        default: return state
    }
}