import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./Auth/reducer";
import { ReducerFun } from "./User/reducer"
const rootReducer = combineReducers({
    user: ReducerFun,
    auth: authReducers
});
export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));