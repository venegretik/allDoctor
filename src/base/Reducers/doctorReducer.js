const defaultState = {
    Doctor_array: [],
    page: 1,
    totalPage:null,
    branch_array:[],
    sort:"rate",
    specialization_id:1,
    branch_offline_array:[],
    DoctorMy_array: []
}
const DOCTOR_ARRAY = 'DOCTOR_ARRAY';
const BRANCH_ARRAY = 'BRANCH_ARRAY';
const BRANCH_OFFLINE_ARRAY = 'BRANCH_OFFLINE_ARRAY';
const DOCTORMY_ARRAY = 'DOCTORMY_ARRAY';
const DOCTOR_DELETE = 'DOCTOR_DELETE';
export const doctorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DOCTOR_ARRAY:
            return {...state, 
                Doctor_array: [...action.Doctor_array.DoctorArray],
                page: action.Doctor_array.page, 
                totalPage: action.Doctor_array.totalPage,
                sort:action.Doctor_array.sort,
                specialization_id:action.Doctor_array.specialization_id}
        case BRANCH_ARRAY:
            return {...state, 
                branch_array: [...action.branch_array]}
        case BRANCH_OFFLINE_ARRAY:
            return {...state, 
                branch_offline_array: [...action.branchOffline_array]}
        case DOCTORMY_ARRAY:
            return {...state, DoctorMy_array:[...action.DoctorMy_array], page:action.page, totalPage:action.total_page}
        case DOCTOR_DELETE:
            return{...state, DoctorMy_array: state.DoctorMy_array.filter(el => action.user_id == el.doctor_id)}
        default:
            return state;
    }
}
export const doctorArrayAction = (Doctor_array) => ({ type: DOCTOR_ARRAY, Doctor_array})
export const branchArrayAction = (branch_array) => ({ type: BRANCH_ARRAY, branch_array})
export const branchOfflineArrayAction = (branchOffline_array) => ({ type: BRANCH_ARRAY, branchOffline_array})
export const DoctorMyArray = (DoctorMy_array, page, total_page) => ({type: DOCTORMY_ARRAY, DoctorMy_array, page,total_page})
export const DoctorMyDelete = (user_id) => ({type: DOCTOR_DELETE, user_id})