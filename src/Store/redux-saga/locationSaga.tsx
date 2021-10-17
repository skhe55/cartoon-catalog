import { put, takeEvery, takeLatest, takeLeading, call } from 'redux-saga/effects';
import { FETCH_LOCATIONS } from '../redux/type';
import { setLocations } from '../redux/actions';

async function fetchLocationsFromApi(num: number) {
    try {
        const request: any = await fetch(`https://rickandmortyapi.com/api/location?page=${num}`);
        const data: any = await request.json();
        return data;
    } catch (e) {
        console.log(e);
    }

}

export function* locationsWatcher(): any {
    yield takeLatest(FETCH_LOCATIONS, locationsWorker);
}


export function* locationsWorker(args: any): any {
    let data: any = [];
    let arr: any = [];
    data = yield call(fetchLocationsFromApi, args.payload);
    arr = [...data.results];
    yield put(setLocations(arr));
}

