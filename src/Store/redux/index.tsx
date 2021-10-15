import { combineReducers } from "redux";
import seriesReducer from "./seriesReducer";
import charactersReducer from "./charactersReducer";
import locationsReducer from "./locationsReducer";
export const rootReducer = combineReducers({
    seriesReducer,
    charactersReducer,
    locationsReducer,
})

export type RootState = ReturnType<typeof rootReducer>