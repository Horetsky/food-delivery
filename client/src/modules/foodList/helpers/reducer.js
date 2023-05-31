const defaultState = {
    reload: true,
    
    foodList: [],
    loadingStatus: 'idle'
}

export const foodListSlice = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_FOOD_LIST_DATA": 
            return {...state, foodList: action.payload};
        case "SET_FOOD_LIST_LOADING":
            return {...state, loadingStatus: action.payload};
        case "SET_FOOD_LIST_RELOAD":
            return {...state, reload: action.payload};

        default: return state
    }
}