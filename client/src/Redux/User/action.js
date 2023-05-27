import axios from "axios";
import { FILTER_DATA, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, SEARCH_BY_NAME } from "./actionType";

export const AddAPi = (payload) => (dispatch) => {
    axios
        .post(`https://jsons-server.herokuapp.com/user`, payload)
        .then((r) => {
            dispatch(getAPi());
        })
        .catch((err) => {
            console.log(err);
        });
};
export const getAPi = () => (dispatch) => {
    dispatch({ type: GET_DATA_LOADING });
    axios
        .get(`https://jsons-server.herokuapp.com/user`)
        .then((r) => {
            dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
            // console.log(r.data,"ffvgdg")
        })
        .catch(() => {
            dispatch({ type: GET_DATA_ERROR });
        });
};

export function filterData(data) {
    return {
        type: FILTER_DATA, payload: data
    }
}

export function searchData(data) {
    return {
        type: SEARCH_BY_NAME, payload: data
    }
}