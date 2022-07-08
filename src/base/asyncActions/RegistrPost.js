import { RegisterAction } from "../Reducers/registerReducer"
import axios from "axios";
const url = 'https://api.telemed.dev-h.ru/v1/';
export const axiosRegister = (obj) => {
    return async function (dispatch) {
        const response = await axios.post(`${url}user`,{...obj}).then(response => {
            if (response.data.status == true) {
                console.log(obj);
                dispatch(RegisterAction(obj))
            }
        });
    }
}