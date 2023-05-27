import {
    FILTER_DATA,
    GET_DATA_ERROR,
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    SEARCH_BY_NAME,
} from "./actionType";

const initdata = {
    loading: false,
    error: false,
    data: [],
};
export const ReducerFun = (state = initdata, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        }
        case GET_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case FILTER_DATA: {
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        }

        case SEARCH_BY_NAME: {
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        }

        default: {
            return state;
        }
    }
};