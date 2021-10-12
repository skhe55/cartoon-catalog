import { all, fork } from "redux-saga/effects";
import { seriesWatcher } from "./seriesSaga";

export function* rootWatcher() {
    console.log('saga worked.')
    yield all([
        fork(seriesWatcher),
    ]);
};