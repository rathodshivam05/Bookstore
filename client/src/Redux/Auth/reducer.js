import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
} from "./actionType";

const initState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
};

export const authReducers = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
                token: "",
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                token: "",
            };
        }
        default: {
            return state;
        }
    }
};