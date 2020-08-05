//전역 액션타입 정의 모듈파일에서 필요한 액션타입이름 상수를 불러온다.
import {
  CHANGE_INPUT,
  INSERT_USER,
  LOGIN_USER,
  LOGOUT_USER,
  INIT_USER,
} from './actionTypes';

const initialState = {
  loading: false,
  error: '',
  user: { userPwd: '', userName: '', email: '' }, //신규 사용자 등록 사용자 객체
  loginUser: {}, //로그인된 사용자의 정보
  userList: [
    {
      userPwd: 'test1',
      userName: 'test1',
      email: 'test1@test.com',
    },
    {
      userPwd: 'test2',
      userName: 'test2',
      email: 'test2@test.com',
    },
    {
      userPwd: 'test3',
      userName: 'test3',
      email: 'test3@test.com',
    },
  ], //등록된 사용자 정보
};

//리듀서 함수 고유명으로 정의 후 export 처리
//Account듀셔 함수를 정의한다.
const Account = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        user: { ...state.user, [action.input.name]: action.input.value },
      };
    case INSERT_USER:
      //axios를 통해 데이터 백엔드 등록처리

      return { ...state, userList: state.userList.concat(state.user) };

    case INIT_USER:
      return { ...state, user: { userPwd: '', userName: '', email: '' } };

    case LOGOUT_USER:
      alert('로그아웃 되었습니다!');
      return {
        ...state,
        loading: false,
        loginUser: { userPwd: '', userName: '', email: '' },
      };

    case LOGIN_USER:
      console.log('로그인정보:', action.user);

      //로그인 처리
      const filterUser = state.userList.filter(
        (user) =>
          user.email === action.user.email &&
          user.userPwd === action.user.userPwd
      );

      /*  if (filterUser.length ==  1 ){
        return { ...state, loading: true, loginUser: filterUser };  
      } 
      else return {...state, loading:false, loginUser:{}};
 */
      if (filterUser.length < 1) throw new Error();
      return { ...state, loading: true, loginUser: filterUser };

    //axios 로그인 처리

    default:
      return state;
  }
};

//Account 리듀셔 함수 출력
export default Account;
