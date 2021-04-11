import { combineReducers } from 'redux';

import auth from './auth';
import theme from './colorTheme'
import events from './data/events'
import goals from './data/goals'

export default rootReducer = combineReducers({
    auth,
    events,
    goals,
    theme
})