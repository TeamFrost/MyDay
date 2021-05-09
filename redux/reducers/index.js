import { combineReducers } from 'redux';

import auth from './auth';
import events from './data/events'
import goals from './data/goals'
import notifications from './data/notifications'
import theme from './colorTheme'

export default rootReducer = combineReducers({
    auth,
    events,
    goals,
    notifications,
    theme
})