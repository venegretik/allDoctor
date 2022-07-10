import axios from "axios";
import {userUrl} from "../configUrl";
import {getShortNameAction} from "../Reducers/mainPageReducer";

const token = localStorage.getItem('token');
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

export const getShortInfo = () => {
  return async (dispatch) => {
    if (token) {
      const response = await axios.get(`${userUrl}short`)
      dispatch(getShortNameAction(response.data))
    }
  }
}