import { applyMiddleware, combineReducers, createStore } from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {configReducer} from "./Reducers/configReducer";
import { registerReducer } from './Reducers/registerReducer';

const reducers = combineReducers({
    form: formReducer,
    config: configReducer,
    register: registerReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));