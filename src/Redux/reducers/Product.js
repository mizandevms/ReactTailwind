/**
 * How my store looks like
 */

import { PRODUCT } from "../ActionTypes"
const {
    PRODUCT_CREATE,
    PRODUCT_READ_LIST_SUCCESS,
} = PRODUCT

const initialState = {
    loading: false,
    products: [],
    singleProduct: {},
    msg: ""
};


export default (currentState = initialState, action) => {
    switch (action.type) {
        case PRODUCT_CREATE:
            return {
                ...currentState,
                singleProduct: action.payload,
            };
        
        case PRODUCT_READ_LIST_SUCCESS: 
            return {
                ...currentState,
                products: action.payload,
            }
        default:
            return currentState;
    }
}