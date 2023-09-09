import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import AuthReducer from "./Reducer/AuthReduce"

const rootReducer = combineReducers({

  auth: AuthReducer,
});
const Store = createStore(rootReducer, applyMiddleware(...[thunk]));
export default Store;
