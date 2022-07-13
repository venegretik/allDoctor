import axios from "axios";
import { defaultUrl } from "../configUrl";
import { getShortNameAction } from "../Reducers/mainPageReducer";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const getShortInfo = () => {
  return async (dispatch) => {
    if (token) {
      const response = await axios.get(`${defaultUrl}user/short`);
      dispatch(getShortNameAction(response.data));
      return response.data.status;
    }
  };
};

export const getNotification = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}user/notification`);
      return response.data;
    }
  };
};
export const getConsultationUpcoming = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}consultation/upcoming`);
      return response.data;
    }
  };
};
export const getDoctorDuty = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}doctor/duty`);
      return response.data;
    }
  };
};
