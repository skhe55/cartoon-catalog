import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_SERIES } from '../redux/type';
import { setSeries } from '../redux/actions';

async function fetchSeriesFromApi(num: number) {
    const request: any = await fetch(`https://rickandmortyapi.com/api/episode?page=${num}`);
    const data: any = await request.json();
    return data;
}

export function* seriesWatcher(): any {
    yield takeEvery(FETCH_SERIES, seriesWorker);
}

export function* seriesWorker(): any {
    let data: any = yield call(fetchSeriesFromApi, 0); // grab the max number of pages
    for (let i = 1; i <= data.info.pages; i++) {
        data = yield call(fetchSeriesFromApi, i);
        yield put(setSeries(data.results));
    }
}