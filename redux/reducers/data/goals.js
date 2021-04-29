import * as types from '../../actions/data/goalsActionTypes'

const initialState = {
    doneFetching: false,
    isFetching: false,
    hasError: false,
    errorMessage: '',
    goalsData: [],
};

export default goals = (state = initialState, action) => {
    switch (action.type) {
        case types.GOALS_REQUEST_START: {
            return {
                ...initialState,
                isFetching: true
            };
        }
        case types.GOALS_REQUEST_SUCCESS: {
            const { goalsData } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                goalsData
            };
        }
        case types.GOALS_REQUEST_ERROR: {
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