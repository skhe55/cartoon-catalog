import { FETCH_SERIES, SET_SERIES, SET_CHARACTERS, RESET_DATA } from "./type"

export const fetchSeries = () => {
    return ({ type: FETCH_SERIES });
};

export const setSeries = (payload: any) => {
    return ({ type: SET_SERIES, payload });
};

export const setCharacters = (payload: any) => {
    return ({ type: SET_CHARACTERS, payload });
};

export const resetData = () => {
    return ({ type: RESET_DATA });
};