import {
  SIGN_IN,
  SIGN_UP_CLIENT,
  SIGN_UP_COMPANY,
  SIGN_OUT,
  AUTH_ERROR
} from '../actions';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: '',
  errorMessage: '',
  role: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case 'DASHBOARD_GET_SECRET':
    //   return {...state, secret: action.payload}
    case SIGN_UP_CLIENT:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: '',
        role: 'client'
      };
    case SIGN_UP_COMPANY:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: '',
        role: 'company'
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        errorMessage: '',
        role: action.payload.role
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        errorMessage: '',
        role: null
      };
    case AUTH_ERROR:
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};