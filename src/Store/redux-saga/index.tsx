import { all, fork } from "redux-saga/effects";
import { seriesWatcher } from "./seriesSaga";
import { charactersWatcher } from "./charactersSaga";

export function* rootWatcher() {
    yield all([
        fork(seriesWatcher),
        fork(charactersWatcher),
    ]);
};