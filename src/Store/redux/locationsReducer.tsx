import { SET_LOCATIONS } from "./type";

const initialState: any = {
    locations: []
};

export default function locationsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LOCATIONS:
            return {
                ...state,
                locations:
                    [
                        ...action.payload
                    ],
            }
        default:
            return state;
    }
}