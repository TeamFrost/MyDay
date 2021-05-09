import * as types from '../../actions/data/notificationsActionTypes'

const initialState = {
    doneFetching: false,
    isFetching: false,
    hasError: false,
    errorMessage: '',
    notificationsData: [],
};

export default notifications = (state = initialState, action) => {
    switch (action.type) {
        case types.NOTIFICATIONS_REQUEST_START: {
            return {
                ...initialState,
                isFetching: true
            };
        }
        case types.NOTIFICATIONS_REQUEST_SUCCESS: {
            const { notificationsData } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                notificationsData
            };
        }
        case types.NOTIFICATIONS_REQUEST_ERROR: {
            const { error } = action;
            return {
                ...state,
                doneFetching: true,
                isFetching: false,
                hasError: true,
                notificationsData: [],
                errorMessage: error
            };
        }
        default:
            return state;
    }
}