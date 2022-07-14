const defaultState = {
    short_name: "",
    firstname: "",
    lastname: "",
    secondname: "",
    phone: "+79991231212",
    gender: 1,
    birthday: "1985-06-15",
    email: "ivanov.ivan.1985@mail.ru",
    photo: "https://....",
    has_notifications: true,
    balance: 9000
  }
  const USER_ARRAY = 'USER_ARRAY';
  export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_ARRAY:
            return{
                ...state,
                ...action.Profile_array
            }
        default:
            return state
    }
}
export const ProfileAction= (Profile_array) => ({ type: USER_ARRAY, Profile_array})