import { put, takeEvery, takeLatest, takeLeading, call } from 'redux-saga/effects';
import { FETCH_LOCATIONS } from '../redux/type';
import { setLocations } from '../redux/actions';

async function fetchLocationsFromApi(num: number) {
    const request: any = await fetch(`https://rickandmortyapi.com/api/location?page=${num}`);
    const data: any = await request.json();
    return data;
}

export function* locationsWatcher(): any {
    yield takeEvery(FETCH_LOCATIONS, locationsWorker);
}

export function* locationsWorker(): any {
    let data: any = yield call(fetchLocationsFromApi, 0); // grab the max number of pages
    let arr: any = [];
    for (let i = 1; i <= data.info.pages; i++) {
        data = yield call(fetchLocationsFromApi, i);
        arr = [...arr, ...data.results];
    }
    yield put(setLocations(arr));
}
