import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import AuthReducer from "./Reducer/AuthReduce"
import LoadReducer from "./Reducer/LoadReducer"
const rootReducer = combineReducers({
  auth: AuthReducer,
  loader:LoadReducer
});
const Store = createStore(rootReducer, applyMiddleware(...[thunk]));
export default Store;
