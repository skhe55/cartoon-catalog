import { put, takeEvery, call } from 'redux-saga/effects';
import { setCharacters, setAllCharacters } from '../redux/actions';
import { FETCH_CHARACTERS, FETCH_ALL_CHARACTERS } from '../redux/type';

async function fetchCharactersFromApi(url: any) {
    const request: any = await fetch(url);
    const data: any = await request.json();
    return data;
}

async function fetchAllCharactersFromApi(num: number) {
    const request: any = await fetch(`https://rickandmortyapi.com/api/character/?page=${num}`);
    const data: any = await request.json();
    return data;
}

export function* charactersWatcher(): any {
    yield takeEvery(FETCH_CHARACTERS, charactersWorker);
    yield takeEvery(FETCH_ALL_CHARACTERS, allCharactersWorker);
};

export function* charactersWorker(args: any): any {
    let data: any = [];
    for (let i = 0; i < args.payload.length; i++) {
        data.push(yield call(fetchCharactersFromApi, args.payload[i]));
    }
    yield put(setCharacters(data));
}

export function* allCharactersWorker(): any {
    let data: any = yield call(fetchAllCharactersFromApi, 0); // grab the max number of pages
    let arr: any = [];
    for (let i = 1; i <= data.info.pages; i++) {
        data = yield call(fetchAllCharactersFromApi, i);
        arr = [...arr, ...data.results];
    }
    yield put(setAllCharacters(arr));
}