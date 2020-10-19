import { all, call } from 'redux-saga/effects';

import around from './around';
import detail from './detail';
import intro from './intro';
import mymovie from './mymovie';
import login from './login';

export default function* rootSaga() {
  // yield all([call(intro), call(around), call(detail), call(search)]);
  yield all([
    call(intro),
    call(around),
    call(detail),
    call(mymovie),
    // call(login),
  ]);
}
