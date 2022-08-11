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
      console.log(response);
      return response.data.status;
    }
  };
};

export const getNotification = (page = 1) => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}user/notification`, {
        params:{
          page: page
        }
      });
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
export const getSymptoms = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}symptoms`);
      return response.data;
    }
  };
};
export const getSlider = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}slider`);
      return response.data;
    }
  };
};
export const getBranch = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}branch`);
      return response.data;
    }
  };
};
export const getOfline = () => {
  return async () => {
    if (token) {
      const response = await axios.get(`${defaultUrl}branch/offline`);
      return response.data;
    }
  };
};
