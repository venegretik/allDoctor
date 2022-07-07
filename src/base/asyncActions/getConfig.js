import axios from "axios";
import {getConfigAction} from "../Reducers/configReducer";

const url = 'https://api.telemed.dev-h.ru/v1/';

export const axiosConfig = () => {
  return function (dispatch) {
    setTimeout(() => {
      axios.get(`${url}config`).then(
        response => dispatch(getConfigAction(response))
      )
    }, 2000)
  }
}
axiosConfig()