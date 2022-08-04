const defaultState = {
    short_name: "",
    firstname: "",
    lastname: "",
    secondname: "",
    phone: "+79991231212",
    gender: 1,
    birthday: "1985-06-15",
    email: "ivanov.ivan.1985@mail.ru",
    photo: "https://api.telemed.dev-h.ru/images/profiles/profile.png",
    referral: "",
    has_notifications: true,
    balance: 9000,
    payment_url:"",
    history:[],
    med_cart:{},
    file_history:[],
    current_page:1,
    total_page:1
  }
  const USER_ARRAY = 'USER_ARRAY';
  const BALANCE = 'BALANCE';
  const REFFERAL = 'REFFERAL';
  const URL = 'URL';
  const FRIEND_REQUEST = 'FRIEND_REQUEST';
  const HISTORY_REQUEST = 'HISTORY_REQUEST';
  const MED_CART = 'MED_CART';
  const RESULT = 'RESULT';
  const PHOTO = 'PHOTO';
  export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_ARRAY:
            return{
                ...state,
                ...action.Profile_array
            }
        case BALANCE:
            return{...state, balance:action.Balance.balance}
        case REFFERAL:
            return {...state, referral:action.Referral.referral}
        case URL:
            return {...state,payment_url: action.payment_url.payment_url}
        case FRIEND_REQUEST:
            return {...state, balance:action.obj.balance}
        case HISTORY_REQUEST:
            return {...state,history:action.obj.items,
                current_page:action.obj.pagination.current_page,
                total_page:action.obj.pagination.total_page}
        case MED_CART:
            return {...state,med_cart:{...action.obj}}
        case RESULT:
            return{...state, file_history:[...action.obj.items], 
                current_page:action.obj.pagination.current_page,
                total_page:action.obj.pagination.total_page}
        case PHOTO:
            return {
                ...state,
                photo:action.obj.photo
            }
        default:
            return state
    }
}
export const ProfileAction= (Profile_array) => ({ type: USER_ARRAY, Profile_array});
export const ProfileBalanceAction = (Balance) =>({ type: BALANCE, Balance});
export const ProfileReferralAction = (Referral) =>({ type: REFFERAL, Referral});
export const ProfilePuyAction = (payment_url) =>({ type: URL, payment_url});
export const ProfileFriendAction = (obj) =>({ type: FRIEND_REQUEST, obj});
export const ProfileHistoryAction = (obj) =>({ type: HISTORY_REQUEST, obj});
export const ProfileMedCartAction = (obj) =>({ type: MED_CART, obj});
export const ProfileResultAction = (obj) =>({ type: RESULT, obj});
export const ProfilePhotoAction = (obj) =>({ type: PHOTO, obj});