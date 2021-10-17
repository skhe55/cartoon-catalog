import { SET_FETCHUP, SET_SERIES } from "./type";

const initialState: any = {
    series: [],
    isFetch: true,
    totalCount: 1,
};

export default function seriesReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_SERIES:
            return {
                ...state,
                series:
                    [
                        ...state.series,
                        ...action.payload
                    ],
                isFetch: false,
                totalCount: state.totalCount + 1,
            }
        case SET_FETCHUP:
            return {
                ...state,
                isFetch: true,
            }
        default: {
            return state;
        }
    }
};