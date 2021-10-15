import { SET_SERIES } from "./type";

const initialState: any = {
    series: [],
};

export default function seriesReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_SERIES:
            return {
                ...state,
                series:
                    [
                        ...action.payload
                    ],
            }
        default: {
            return state;
        }
    }
};