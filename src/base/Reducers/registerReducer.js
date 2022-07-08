const defaultState = {
    firstname: "",
    lastname: "",
    secondname: "",
    gender: 0,
    birthday: "",
    email: ""
}

const REGISTER = 'REGISTER';

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER:
            return { ...state, ...action.obj}
        default:
            return state;
    }
}
export const RegisterAction = (obj) => ({type: REGISTER, obj})