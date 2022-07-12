import axios from "axios";
import { defaultUrl } from "../configUrl";
import { doctorArrayAction, branchArrayAction } from "../Reducers/doctorReducer";
export const axiosDoctor = (totalPage = 1, specialization = 1, sort = "rate") => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctors`, {
            params: {
                branch_id: specialization,
                specialization_id: 3,//?
                sort: sort,
                page: totalPage
            }
        })
        debugger;
        const responceObj = {
            DoctorArray: response.data.data.doctors,
            page: response.data.data.pagination.current_page,
            totalPage: response.data.data.pagination.total_page,
            specialization_id: specialization,
            sort: sort
        }

        dispatch(doctorArrayAction(responceObj));
    }
}
export const axiosBranch = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}branch`);
        dispatch(branchArrayAction(response.data.data.items));
    }
}