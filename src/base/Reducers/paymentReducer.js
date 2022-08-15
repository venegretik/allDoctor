const defaultState = {
    doctor_id: 0,
    firstname: "",
    lastname: "",
    secondname: "",
    photo: "",
    is_online: false,
    specialization: [],
    regalia: [],
    rate: 0,
    recomends: 0,
    reviews: 0,
    consultation_datetime: "",
    checkout: [],
    payment_url: ""
}
const PAYMENT_INFO = 'PAYMENT_INFO';
const PAYMENT_POST = 'PAYMENT_POST';
const PAYMENT_TIME = 'PAYMENT_TIME';
export const paymentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PAYMENT_INFO:
            return { ...state, ...action.recording_array }
        case PAYMENT_POST:
            return { ...state, ...action.recording_array }
        case PAYMENT_TIME:
            return { ...state, consultation_datetime: action.time }
        default:
            return state
    }
}
export const paymentInfoAction = (recording_array) => ({ type: PAYMENT_INFO, recording_array });
export const paymentPostAction = (recording_array) => ({ type: PAYMENT_POST, recording_array });
export const paymentDateTimeAction = (time) => ({ type: PAYMENT_TIME, time });