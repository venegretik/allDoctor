const defaultState = {
    Doctor_array: [],
    page: 1,
    totalPage:null,
    branch_array:[],
    sort:"rate",
    specialization_id:1
}
const DOCTOR_ARRAY = 'DOCTOR_ARRAY';
const BRANCH_ARRAY = 'BRANCH_ARRAY';

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
                branch_array: [...action.branch_array],}
        default:
            return state;
    }
}

export const doctorArrayAction = (Doctor_array) => ({ type: DOCTOR_ARRAY, Doctor_array})
export const branchArrayAction = (branch_array) => ({ type: BRANCH_ARRAY, branch_array})