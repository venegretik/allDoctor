import axios from "axios";
import { defaultUrl } from "../configUrl";
import { paymentInfoAction } from "../Reducers/paymentReducer";
export const getPuymentInfo = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.post(`${defaultUrl}consultation/checkout`, {
        doctor_id: id,
        slot_id: 1,
        promocode: "1234",
        use_balance: true
      });
      dispatch(paymentInfoAction(response.data.data));
    }
  };
};
export const getPuymentPost = (obj) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.post(`${defaultUrl}consultation/pay`,{
          obj
      });
      dispatch(paymentInfoAction(response.data.data));
    }
  };
};