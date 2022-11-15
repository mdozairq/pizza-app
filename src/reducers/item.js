/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ITEMS } from '../constants/actionTypes';


const INITIAL_STATE = {
    isLoading: true,
    items: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};

