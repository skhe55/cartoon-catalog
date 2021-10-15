import { FETCH_SERIES, SET_SERIES, SET_CHARACTERS, RESET_DATA, SET_ALL_CHARACTERS, SET_LOCATIONS } from "./type"

export const fetchSeries = () => {
    return ({ type: FETCH_SERIES });
};

export const setSeries = (payload: any) => {
    return ({ type: SET_SERIES, payload });
};

export const setCharacters = (payload: any) => {
    return ({ type: SET_CHARACTERS, payload });
};

export const setAllCharacters = (payload: any) => {
    return ({ type: SET_ALL_CHARACTERS, payload });
};

export const resetData = () => {
    return ({ type: RESET_DATA });
};

export const setLocations = (payload: any) => {
    return ({ type: SET_LOCATIONS, payload });
};
