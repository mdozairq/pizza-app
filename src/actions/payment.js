import { AUTH, START_LOADING, SET_PAYMENT, GET_PAYMENT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const addPayment = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.setPayment(formData);
    console.log("here setPayment", data);
    dispatch({ type: SET_PAYMENT, payload: { data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPayment = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data} = await api.getPayment();
    console.log(data);
    dispatch({ type: GET_PAYMENT, payload: { data }});
  } catch (error) {
    console.log(error);
  }
};
