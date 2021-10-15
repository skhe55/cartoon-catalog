import { SET_CHARACTERS, RESET_DATA, SET_ALL_CHARACTERS } from "./type";

const initialState: any = {
    characters: [],
    allCharacters: [],
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
        case SET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters:
                    [
                        ...action.payload
                    ],
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