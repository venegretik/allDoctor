import axios from "axios";
import { defaultUrl } from "../configUrl";
import {ProfileAction} from "../Reducers/UserReducer"
export const axiosProfile= () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user`);
        dispatch(ProfileAction(response.data.data))
    }
}