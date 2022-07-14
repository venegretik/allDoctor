const defaultState = {
    doctor_id: 4,
    firstname: "",
    lastname: "",
    secondname: "",
    photo: "",
    is_online: true,
    specialization:[],
    regalia:[],
    consultations:[]
}
const REVIEWS_ARRAY = 'REVIEWS_ARRAY';
export const reviewsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REVIEWS_ARRAY:
            return{...state,
            ...action.Reviews_array}
        default:
            return state;
    }
}
export const reviewsAction= (Reviews_array) => ({ type: REVIEWS_ARRAY, Reviews_array})