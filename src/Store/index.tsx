import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./redux-saga";
import { rootReducer } from "./redux";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
