import * as types from '../../actions/data/actionTypes'

const initialState = {
    doneFetching: false,
    isFetching: false,
    hasError: false,
    errorMessage: '',
    goalsData: [],
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
            const { goalsData } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                goalsData
            };
        }
        case types.REQUEST_ERROR: {
            const { error } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                hasError: true,
                goalsData: [],
                errorMessage: error
            };
        }
        default:
            return state;
    }
}