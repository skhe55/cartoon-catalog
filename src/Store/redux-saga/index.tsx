import { all, fork } from "redux-saga/effects";
import { seriesWatcher } from "./seriesSaga";
import { charactersWatcher } from "./charactersSaga";
import { locationsWatcher } from "./locationSaga";

export function* rootWatcher() {
    yield all([
        fork(seriesWatcher),
        fork(charactersWatcher),
        fork(locationsWatcher),
    ]);
};