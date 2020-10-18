import { takeEvery } from 'redux-saga/effects';
import createRequestSaga from 'utils/createRequestSaga';
import { mymovieActions } from 'store/modules/mymovie';
import mymovieAPI from 'store/apis/mymovie';

const saga = createRequestSaga(mymovieActions, mymovieAPI);

export default function* watchAround() {
  yield takeEvery(mymovieActions.REQUEST, saga);
}
