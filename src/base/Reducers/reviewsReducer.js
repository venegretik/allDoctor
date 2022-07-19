const defaultState = {
    doctor_id: 4,
    firstname: "",
    lastname: "",
    secondname: "",
    photo: "",
    is_online: true,
    specialization:[],
    regalia:[],
    consultations:[],
    consultation_id:0,
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0,
}
const REVIEWS_ARRAY = 'REVIEWS_ARRAY';
const ID_CONSULTATION = 'ID_CONSULTATION';
const STAR1 = 'STAR1';
const STAR2 = 'STAR2';
const STAR3 = 'STAR3';
const STAR4 = 'STAR4';
const STAR5 = 'STAR5';

export const reviewsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REVIEWS_ARRAY:
            return{...state,
            ...action.Reviews_array}
        case STAR1:
            return{...state, star1:action.Star}
        case STAR2:
            return{...state, star2:action.Star}
        case STAR3:
            return{...state, star3:action.Star}
        case STAR4:
            return{...state, star4:action.Star}
        case STAR5:
            return{...state, star5:action.Star}
            case ID_CONSULTATION:
            return{...state, consultation_id:action.id}
        default:
            return state;
    }
}
export const reviewsAction = (Reviews_array) => ({ type: REVIEWS_ARRAY, Reviews_array});
export const reviewCosultationAction = (id) => ({type:ID_CONSULTATION, id});
export const Star1Action = (Star) => ({ type: STAR1, Star});
export const Star2Action = (Star) => ({ type: STAR2, Star});
export const Star3Action = (Star) => ({ type: STAR3, Star});
export const Star4Action = (Star) => ({ type: STAR4, Star});
export const Star5Action = (Star) => ({ type: STAR5, Star});
