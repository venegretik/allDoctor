import axios from "axios";
import { defaultUrl } from "../configUrl";
import { paymentInfoAction, paymentDateTimeAction } from "../Reducers/paymentReducer";
export const getPuymentInfo = (id, slot, DateStr, use_balance=false, promocode="") => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.post(`${defaultUrl}consultation/checkout`, {
        doctor_id: id,
        slot_id: slot,
        promocode: promocode,
        use_balance: use_balance
      });
      dispatch(paymentInfoAction(response.data.data, slot));
      if (DateStr)
        dispatch(paymentDateTimeAction(DateStr));
      return response.data;
    }
  };
};
export const getPuymentPost = (obj) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.post(`${defaultUrl}consultation/pay`, {
          ...obj
      });
      dispatch(paymentInfoAction(response.data.data));
      return response.data;
    }
  };
};