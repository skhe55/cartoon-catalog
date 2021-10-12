import { all, fork } from "redux-saga/effects";
import { seriesWatcher } from "./seriesSaga";

export function* rootWatcher() {
    yield all([
        fork(seriesWatcher),
    ]);
};