//전역 액션타입 정의 모듈파일에서 필요한 액션타입이름 상수를 불러온다.
import {
  CHANGE_INPUT,
  INSERT_USER,
  LOGIN_USER,
  LOGOUT_USER,
  INIT_USER,
} from './actionTypes';

//회원가입시 또는 로그인시 입력요소의 값변경을 관리할떄 사용
//입력요소의 onChange 이벤트 발생시 해당액션생성함수 이용처리
//Input HTML 요소를 전달받는다.
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

//사용자 정보등록 액션생성함수
export const insertUser = () => ({
  type: INSERT_USER,
});

//추가 회원정보 초기화
export const initUser = () => ({
  type: INIT_USER,
});

//회원 로그아웃
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

//로그인 실시 액션생성함수
export const loginUser = (email, userPwd) => ({
  type: LOGIN_USER,
  user: {
    email: email,
    userPwd: userPwd,
  },
});
