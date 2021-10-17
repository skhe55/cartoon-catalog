import { SET_LOCATIONS, SET_FETCHISUP } from "./type";

const initialState: any = {
    locations: [],
    locationsIsFetch: true,
    totalCount: 1,
};

export default function locationsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LOCATIONS:
            return {
                ...state,
                locations:
                    [
                        ...state.locations,
                        ...action.payload,
                    ],
                locationsIsFetch: false,
                totalCount: state.totalCount + 1,
            }
        case SET_FETCHISUP:
            return {
                ...state,
                locationsIsFetch: true,
            }
        default:
            return state;
    }
}