import { put, takeEvery, call } from 'redux-saga/effects';
import { setCharacters } from '../redux/actions';
import { FETCH_CHARACTERS } from '../redux/type';

async function fetchCharactersFromApi(url: any) {
    const request: any = await fetch(url);
    const data: any = await request.json();
    return data;
}

export function* charactersWatcher(): any {
    yield takeEvery(FETCH_CHARACTERS, charactersWorker);
};

export function* charactersWorker(args: any): any {
    let data: any = [];
    for (let i = 0; i < args.payload.length; i++) {
        data.push(yield call(fetchCharactersFromApi, args.payload[i]));
    }
    yield put(setCharacters(data));
}