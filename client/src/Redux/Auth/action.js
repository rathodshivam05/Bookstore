import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import axios from "axios";
export const AuthLoginApi = (params) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios
        .post(`https://reqres.in/api/login`, params)
        .then((r) => {
            dispatch({ type: LOGIN_SUCCESS, payload: r.data.token });
            return LOGIN_SUCCESS;
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
            return LOGIN_FAILURE;
        });
};