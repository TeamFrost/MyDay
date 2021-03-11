import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducers from './reducers/index'

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));