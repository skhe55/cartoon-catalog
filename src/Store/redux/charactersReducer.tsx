import { SET_CHARACTERS, RESET_DATA, SET_ALL_CHARACTERS, SET_FETCHUP_ALL_CHARACTER } from "./type";

const initialState: any = {
    characters: [],
    allCharacters: [],
    isFetching: false,
    isFetchingAllCharacter: true,
    totalCount: 1,
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
                        ...state.allCharacters,
                        ...action.payload
                    ],
                isFetchingAllCharacter: false,
                totalCount: state.totalCount + 1,
            }
        case SET_FETCHUP_ALL_CHARACTER:
            return {
                ...state,
                isFetchingAllCharacter: true,
            }
        case RESET_DATA:
            return {
                characters: [],
                allCharacters: state.allCharacters,
                isFetching: false,
                isFetchingAllCharacter: true,
                totalCount: state.totalCount,
            }
        default:
            return state;
    }
}