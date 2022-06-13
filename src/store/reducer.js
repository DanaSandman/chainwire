const initialState = {
    startDate: "2022-05-01",
    endDate:"2022-05-04",
    rangeData:[]
};

export function currencyReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_START_DATE':
            return {
                ...state, startDate: action.data
            };
        case 'SET_END_DATE':
            return {
                ...state, endDate: action.data
            };    
        case 'SET_RANGE_DATA':
            return {
                ...state, rangeData: action.data
            };
        default:
            return state
    }
}