import * as actionType from '../constants/actionTypes';

const getUserStatus = () => {
  return JSON.parse(localStorage.getItem('profile'))
};

const isLoggedIn = Boolean(getUserStatus());

console.log(isLoggedIn);

const INITIAL_STATE = {
  isLoading: true,
  authData: null || getUserStatus(),
  isLoggedIn,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: action.error.message };

    case actionType.ISLOG:
      return {
        ...state,
        isLoggedIn: action.data
      };
    case actionType.START_LOADING:
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: action.error.message };
    default:
      return state;
  }
};

export default authReducer;
