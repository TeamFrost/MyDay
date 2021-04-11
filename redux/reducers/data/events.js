import * as types from '../../actions/data/actionTypes'

const initialState = {
    doneFetching: false,
    isFetching: false,
    hasError: false,
    errorMessage: '',
    eventsData: [],
};

export default events = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_START: {
            return {
                ...initialState,
                isFetching: true
            };
        }
        case types.REQUEST_SUCCESS: {
            const { eventsData } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                eventsData
            };
        }
        case types.REQUEST_ERROR: {
            const { error } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                hasError: true,
                eventsData: [],
                errorMessage: error
            };
        }
        default:
            return state;
    }
}