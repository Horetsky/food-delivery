const defaultState = {
    reload: true,
    activeFilter: 'all',
    // moreFromArtist: [],
    // loadingStatus: 'idle'
}

export const productFilters = (state = defaultState, action) => {
    switch (action.type) {
        case"SET_ACTIVE_FILTER":
            return {...state, activeFilter: action.payload}
        default: return state
    }
}