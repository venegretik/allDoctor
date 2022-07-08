import axios from "axios";
import {getConfigAction} from "../Reducers/configReducer";

const url = 'https://api.telemed.dev-h.ru/v1/';

export const axiosConfig = () => {
    return async function (dispatch) {
      const response = await axios.get(`${url}config`)
      dispatch(getConfigAction(response.data))
    }
}
axiosConfig()