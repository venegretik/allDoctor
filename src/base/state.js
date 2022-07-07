import { applyMiddleware, combineReducers, createStore } from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {configReducer} from "./Reducers/configReducer";


const reducers = combineReducers({
    form: formReducer,
    config: configReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));