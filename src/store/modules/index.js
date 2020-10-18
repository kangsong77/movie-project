import { combineReducers } from 'redux';

import around from './around';
import detail from './detail';
import intro from './intro';
import loading from './loading';
import mymovie from './mymovie';

export default combineReducers({
  intro, //오늘의 영화추천
  loading,
  around, //현재 상영중
  detail, //상세 페이지
  mymovie, // 유저 좋아요 무비
});
