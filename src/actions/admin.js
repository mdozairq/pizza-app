import { ADMIN_AUTH, START_LOADING  } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data, error } = await api.adminSignIn(formData);
    dispatch({ type: ADMIN_AUTH, data, error });
    navigate('/dashboard');
  } catch (error) {
    console.log(error);
  }
};