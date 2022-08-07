const defaultState = {
    consultation: [],
    consultationHistory:[],
    page:1,
    totalPage:1,
    specialization_id:1,
    doctor:{},
    date_to:"",
    date_from: "",
    statusModal:false
}
const CONSULTATION_ARRAY = 'CONSULTATION_ARRAY';
const HISTORY_ARRAY = 'HISTORY_ARRAY';
const CONSULTATION_DELETE = 'CONSULTATION_DELETE';
const CONSULTATION_START = 'CONSULTATION_START';
const CONSULTATION_MODAL = 'CONSULTATION_MODAL';
export const consultationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONSULTATION_ARRAY:
            return {...state, consultation:[...action.consultation_array.items.filter(el=>!el.is_upcomming)],
                };
        case HISTORY_ARRAY:
            return {...state, consultationHistory:[...action.consultation_array.DoctorArray],
                page: action.consultation_array.page, 
                totalPage: action.consultation_array.totalPage,
                specialization_id:action.consultation_array.specialization_id,
                date_from:action.consultation_array.date_from,
                date_to:action.consultation_array.date_to}
        case CONSULTATION_DELETE:
            return {...state, consultation: state.consultation.filter(el => action.user_id != el.consultation_id)}
        case CONSULTATION_START:
            return{...state, doctor: {...action.Doctor}}
        case CONSULTATION_MODAL:
            return{...state, statusModal:action.status}
        default:
            return state;
    }
}
export const consultationAction = (consultation_array) => ({ type: CONSULTATION_ARRAY, consultation_array});
export const consultationHistoryAction = (consultation_array) => ({ type: HISTORY_ARRAY, consultation_array});
export const consultationDeleteAction = (user_id) => ({type: CONSULTATION_DELETE, user_id})
export const consultationStartAction = (Doctor) => ({type: CONSULTATION_START, Doctor})
export const consultationModalAction = (status) => ({type: CONSULTATION_MODAL, status})