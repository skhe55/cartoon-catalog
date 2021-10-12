import { FETCH_SERIES, SET_SERIES } from "./type"

export const fetchSeries = () => {
    return ({ type: FETCH_SERIES })
}

export const setSeries = (payload: any) => {
    return ({ type: SET_SERIES, payload })
}