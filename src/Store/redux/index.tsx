import { combineReducers } from "redux";
import seriesReducer from "./seriesReducer";
import charactersReducer from "./charactersReducer";
export const rootReducer = combineReducers({
    seriesReducer,
    charactersReducer,
})

export type RootState = ReturnType<typeof rootReducer>