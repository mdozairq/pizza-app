/* eslint-disable import/no-anonymous-default-export */
import { DELETE_ITEM, FETCH_ITEMS } from '../constants/actionTypes';


const INITIAL_STATE = {
    isLoading: true,
    items: []
}

export default (state = {
    isLoading: true,
    items: []
}, action) => {
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
        // case DELETE_ITEM:
        //     state.items = state.items.filter((each) => each.id !== action.payload.id)

        default:
            return state;
    }
};

