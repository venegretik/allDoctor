const defaultState = {
  LoginModal: false,
};

const SET_LOGIN_MODAL = "SET_LOGIN_MODAL";

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN_MODAL:
      return { ...state, LoginModal: action.payload };
    default:
      return state;
  }
};

export const getLoginModal = (payload) => ({ type: SET_LOGIN_MODAL, payload });
