const { PRODUCT } = require("../ActionTypes")

const {
    PRODUCT_CREATE,
    PRODUCT_READ_LIST,
    PRODUCT_READ_LIST_SUCCESS
} = PRODUCT

export const createProduct = (data) => {
    return {
        type: PRODUCT_CREATE,
        payload: data,
    }
}

export const readProductList = (query) => {
    return {
        type: PRODUCT_READ_LIST,
        payload: query,
    }
}

export const readProductListSuccess = (products) => {
    return {
        type: PRODUCT_READ_LIST_SUCCESS,
        payload: products,
    }
}