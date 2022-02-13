import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";


const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== "production") {
		const { composeWithDevTools } = require("redux-devtools-extension");
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};
const makeStoreWithSaga = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};


// const makeStore = () => {
// 	const store = createStore(rootReducer);
// 	return store;
// };

export default makeStoreWithSaga()

