import * as types from '../actions/auth/actionTypes';

const initialState = {
    doneFetching: false,
    isFetching: false,
    hasError: false,
    errorMessage: '',
    user: null
};

export default auth = (state = initialState, action) => {
    switch (action.type) {
        case types.SESSION_START: {
            return {
                ...initialState,
                isFetching: true,
            };
        }
        case types.SESSION_SUCCESS: {
            const { user } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                user
            };
        }
        case types.SESSION_ERROR: {
            const { error } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                hasError: true,
                user: null,
                errorMessage: error
            };
        }
        case types.SESSION_LOGOUT: {
            return {
                ...initialState,
                doneFetching: true
            };
        }
        default: {
            return state;
        }
    }
};