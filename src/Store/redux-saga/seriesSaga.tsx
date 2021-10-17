import { put, takeEvery, takeLatest, takeLeading, call } from 'redux-saga/effects';
import { FETCH_SERIES } from '../redux/type';
import { setSeries } from '../redux/actions';

async function fetchSeriesFromApi(num: number) {
    try {
        const request: any = await fetch(`https://rickandmortyapi.com/api/episode?page=${num}`);
        const data: any = await request.json();
        return data;
    } catch (e) {
        console.log('fetchSeriesFromApi exception: ', e);
    }

}

export function* seriesWatcher(): any {
    yield takeEvery(FETCH_SERIES, seriesWorker);
}

export function* seriesWorker(args: any): any {
    let data: any = yield call(fetchSeriesFromApi, args.payload);
    let arr: any = [];
    arr = [...data.results];
    yield put(setSeries(arr));
}