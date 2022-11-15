import * as actionType from '../constants/actionTypes';

const INITIAL_STATE = {
    orderData: null,
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SET_ORDER:
            return { ...state, orderData: action.data, loading: false, errors: null };


        case actionType.GET_ORDER:
            return { ...state, orderData: action.payload, loading: false, errors: null };
            
        default:
            return state;
    }
};

export default orderReducer;