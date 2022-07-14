import axios from "axios";
import { defaultUrl } from "../configUrl";
import { reviewsAction } from "../Reducers/reviewsReducer";
export const axiosReviews = (doctor_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctor/${doctor_id}/review`);
        dispatch(reviewsAction(response.data.data));
    }
}