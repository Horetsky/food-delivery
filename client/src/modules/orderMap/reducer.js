const defaultState = {
    origin: '',
    destination: '',
    route: null
}

export const orderMapSlice = (state = defaultState, action) => {
    switch (action.type) {
        case"SET_ORIGIN_DATA":
            return {...state, origin: action.payload};

        case"SET_DESTINATION_DATA":
            return {...state, destination: action.payload};
        
        case"SET_ROUTE": 
            return{...state, route: action.payload}

        default: return state
    }
}