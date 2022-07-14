import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import { configReducer } from "./Reducers/configReducer";
import { loginReducer } from "./Reducers/loginReducer";
import { doctorReducer } from "./Reducers/doctorReducer";
import { mainPageReducer } from "./Reducers/mainPageReducer";
import {profileReducer} from "./Reducers/UserReducer";
import { reviewsReducer } from "./Reducers/reviewsReducer";
const reducers = combineReducers({
  form: formReducer,
  config: configReducer,
  login: loginReducer,
  doctorSpec: doctorReducer,
  main: mainPageReducer,
  profile: profileReducer,
  review: reviewsReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
