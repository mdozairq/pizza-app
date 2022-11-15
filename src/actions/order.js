import { GET_ORDER, SET_ORDER, START_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getOrder = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getOrder();
        console.log("d: ", data);
        dispatch({ type: GET_ORDER, payload: { data } });
    } catch (error) {
        console.log(error);
    }
};

export const setOrder = (cartItem) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.setOrder(cartItem);
        console.log(data)
        dispatch({ type: SET_ORDER, payload: { data } });

    } catch (error) {
        console.log(error);
    }
};
