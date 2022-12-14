const defaultState = {
    Doctor_array: [],
    page: 1,
    totalPage: null,
    branch_array: [],
    sort: "rate",
    specialization_id: 1,
    specialization_name: "",
    branch_offline_array: [],
    branch_name:"",
    DoctorMy_array: [],
    spec_array: [],
    spec_id: 1
}
const DOCTOR_ARRAY = 'DOCTOR_ARRAY';
const DOCTOR_NAME = 'DOCTOR_NAME';
const BRANCH_ARRAY = 'BRANCH_ARRAY';
const BRANCH_OFFLINE_ARRAY = 'BRANCH_OFFLINE_ARRAY';
const DOCTORMY_ARRAY = 'DOCTORMY_ARRAY';
const DOCTOR_DELETE = 'DOCTOR_DELETE';
const DOCTORMYNEW_ARRAY = 'DOCTORMYNEW_ARRAY';
export const doctorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DOCTOR_ARRAY:
            return {
                ...state,
                Doctor_array: action.type_add==="new" ? [...action.Doctor_array.DoctorArray] : state.Doctor_array.concat(action.Doctor_array.DoctorArray),
                page: action.Doctor_array.page,
                totalPage: action.Doctor_array.totalPage,
                sort: action.Doctor_array.sort,
                branch_name:action.Doctor_array.branchTitle,
                specialization_id: action.Doctor_array.specialization_id,
                spec_array: [{ branch_id: 0, title: "Все" }, ...action.Doctor_array.spec_array],
                spec_id: action.Doctor_array.spec_id
            }
        case BRANCH_ARRAY:
            return {
                ...state,
                branch_array: [...action.branch_array]

            }
        case BRANCH_OFFLINE_ARRAY:
            return {
                ...state,
                branch_offline_array: [...action.branchOffline_array]
            }
        case DOCTORMY_ARRAY:
            return { ...state, DoctorMy_array: state.DoctorMy_array.concat(action.DoctorMy_array), page: action.page, totalPage: action.total_page }
        case DOCTORMYNEW_ARRAY:
            return { ...state, DoctorMy_array: [...action.DoctorMy_array], page: action.page, totalPage: action.total_page }
        case DOCTOR_DELETE:
            return { ...state, DoctorMy_array: state.DoctorMy_array.filter(el => action.user_id !== el.doctor_id) }
        case DOCTOR_NAME:
            return { ...state, specialization_name: action.name }
        default:
            return state;
    }
}
export const doctorArrayAction = (Doctor_array, type_add) => ({ type: DOCTOR_ARRAY, Doctor_array, type_add })
export const branchArrayAction = (branch_array) => ({ type: BRANCH_ARRAY, branch_array })
export const branchOfflineArrayAction = (branchOffline_array) => ({ type: BRANCH_OFFLINE_ARRAY, branchOffline_array })
export const DoctorMyArray = (DoctorMy_array, page, total_page) => ({ type: DOCTORMY_ARRAY, DoctorMy_array, page, total_page })
export const DoctorMyNewArray = (DoctorMy_array, page, total_page) => ({ type: DOCTORMYNEW_ARRAY, DoctorMy_array, page, total_page })
export const DoctorMyDelete = (user_id) => ({ type: DOCTOR_DELETE, user_id })
export const DoctorMyName = (name) => ({ type: DOCTOR_NAME, name });