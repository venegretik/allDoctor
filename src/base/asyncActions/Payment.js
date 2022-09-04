import axios from "axios";
import { defaultUrl } from "../configUrl";
import { paymentInfoAction, paymentDateTimeAction } from "../Reducers/paymentReducer";
export const getPuymentInfo = (id, slot, DateStr) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.post(`${defaultUrl}consultation/checkout`, {
        doctor_id: id,
        slot_id: slot,
        promocode: "",
        use_balance: true
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
        params: {
          ...obj
        }
      });
      dispatch(paymentInfoAction(response.data.data));
      return response.data;
    }
  };
};