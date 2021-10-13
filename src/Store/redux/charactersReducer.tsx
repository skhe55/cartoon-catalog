import { SET_CHARACTERS, RESET_DATA } from "./type";

const initialState: any = {
    characters: [],
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
            }
        case RESET_DATA:
            return {
                characters: [],
            }
        default:
            return state;
    }
}