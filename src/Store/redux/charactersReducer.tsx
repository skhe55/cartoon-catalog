import { SET_CHARACTERS, RESET_DATA } from "./type";

const initialState: any = {
    characters: [],
    isFetching: false,
};

export default function charactersReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_CHARACTERS:
            return {
                ...state,
                characters:
                    [
                        ...action.payload
                    ],
                isFetching: true,
            }
        case RESET_DATA:
            return {
                characters: [],
                isFetching: false,
            }
        default:
            return state;
    }
}