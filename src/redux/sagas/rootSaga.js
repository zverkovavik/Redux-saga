import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_NEWS } from '../constants';
import { getNews } from '../../api/api';
import { setNews } from '../actions/ActionCreator';

// all logics of work with asynchronous code
export function* workerSaga() {
    const { hits } = yield call(getNews, 'react');
    yield put(setNews(hits))
}

// watchers are to follow up actions
export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}