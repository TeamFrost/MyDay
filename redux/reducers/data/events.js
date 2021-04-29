import * as types from '../../actions/data/eventsActionTypes'

const initialState = {
    doneFetching: false,
    isFetching: false,
    hasError: false,
    errorMessage: '',
    eventsData: [],
};

export default events = (state = initialState, action) => {
    switch (action.type) {
        case types.EVENTS_REQUEST_START: {
            return {
                ...initialState,
                isFetching: true
            };
        }
        case types.EVENTS_REQUEST_SUCCESS: {
            const { eventsData } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                eventsData
            };
        }
        case types.EVENTS_REQUEST_ERROR: {
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