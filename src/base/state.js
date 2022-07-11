import { applyMiddleware, combineReducers, createStore } from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {configReducer} from "./Reducers/configReducer";
import {loginReducer} from "./Reducers/loginReducer";

const reducers = combineReducers({
    form: formReducer,
    config: configReducer,
    login: loginReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));