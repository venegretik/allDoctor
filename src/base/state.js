import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { configReducer } from "./Reducers/configReducer";
import { loginReducer } from "./Reducers/loginReducer";
import { doctorReducer } from "./Reducers/doctorReducer";
import { mainPageReducer } from "./Reducers/mainPageReducer";
import { profileReducer } from "./Reducers/UserReducer";
import { reviewsReducer } from "./Reducers/reviewsReducer";
import { recordingReducer } from "./Reducers/recordingReducer";
import { consultationReducer } from "./Reducers/ConsultationReducer";
import { paymentReducer } from "./Reducers/paymentReducer";
import { modalReducer } from "./Reducers/modalReduces";
const reducers = combineReducers({
  config: configReducer,
  login: loginReducer,
  doctorSpec: doctorReducer,
  main: mainPageReducer,
  profile: profileReducer,
  review: reviewsReducer,
  recording: recordingReducer,
  consultation: consultationReducer,
  payment: paymentReducer,
  modal: modalReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
