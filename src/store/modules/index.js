import { combineReducers } from 'redux';

import around from './around';
import detail from './detail';
import search from './search';

export default combineReducers({
  around, //현재 상영중
  detail, //상세 페이지
  search, //검색
});
