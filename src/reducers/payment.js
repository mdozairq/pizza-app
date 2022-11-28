import * as actionType from '../constants/actionTypes';

const INITIAL_STATE = {
    paymentData: null,
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SET_PAYMENT:
            return { ...state, paymentData: action.data, loading: false, errors: null };


        case actionType.GET_PAYMENT:
            return { ...state, paymentData: action.payload, loading: false, errors: null };
            
        default:
            return state;
    }
};

export default orderReducer;