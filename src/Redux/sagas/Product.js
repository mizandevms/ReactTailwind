/**
 * Watcher fuction / Master function
 * Slave function
 */

import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { PRODUCT } from "../ActionTypes"
const {
    PRODUCT_READ_LIST,
} = PRODUCT
import ProductAPI from "../../Services/apis/product"
import { readProductListSuccess } from "../actions/Product"

function* productReadListSaga({ payload: query }) {
    try {
        const { data, status } = yield call(ProductAPI.readList, query)
        if (status == 200) {
            yield put(readProductListSuccess(data.data))
        }
    } catch (err) {
        console.log("ERROR productReadListSaga", err);
        // show toast message
    }
}

export function* productReadListWatcher() {
    yield takeLatest(PRODUCT_READ_LIST, productReadListSaga)
}

export default function* rootSaga() {
    yield all([
        fork(productReadListWatcher),
    ])
}