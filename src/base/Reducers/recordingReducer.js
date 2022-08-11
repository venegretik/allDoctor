const defaultState = {
    reviewsArray:[],
    current_page:1,
    total_page:1,
    doctor_id:0,
    firstname:"",
    lastname:"",
    secondname:"",
    photo:"",
    is_online:false,
    specialization:[],
    regalia:[],
    rate:0,
    recomends:0,
    reviews:0,
    price:0,
    qualification:"",
    education:"",
    training:"",
    calendar:[]
}
const RECORDING_ARRAY = 'RECORDING_ARRAY';
const RECORDING_INFO = 'RECORDING_INFO';
const RECORDING_CALCULATOR = 'RECORDING_CALCULATOR';
export const recordingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECORDING_ARRAY:
            return{...state,
            reviewsArray:state.reviewsArray.concat(action.Reviews_array.items),
            current_page:action.Reviews_array.pagination.current_page,
            total_page:action.Reviews_array.pagination.total_page}
        case RECORDING_INFO:
            return {...state, ...action.recording_array}
        case RECORDING_CALCULATOR:
            return {...state, calendar:[...action.recording_array.items]}
        default:
            return state;
    }
}
export const recordingAction = (Reviews_array) => ({ type: RECORDING_ARRAY, Reviews_array});
export const recordingInfoAction = (recording_array) => ({ type: RECORDING_INFO, recording_array});
export const recordingConsultationAction = (recording_array) => ({ type: RECORDING_CALCULATOR, recording_array});