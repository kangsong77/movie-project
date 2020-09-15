import { all, call } from 'redux-saga/effects';

import around from './around';
import detail from './detail';
import search from './search';
import intro from './intro';

export default function* rootSaga() {
  // yield all([call(intro), call(around), call(detail), call(search)]);
  yield all([call(intro), call(around), call(detail)]);
}
