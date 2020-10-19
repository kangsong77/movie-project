import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const loginActions = createRequestAction('LOGIN');

const initialState = {
  isLogin: false,
  jwtToken: '',
};

const reducer = handleActions(
  {
    [loginActions.INIT]: (state, action) => {
      return produce(state, (draft) => {
        draft.isLogin = false;
        draft.result = action.payload.result;
      });
    },
    [loginActions.REQUEST]: (state, _action) => state,

    [loginActions.SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.result = action.payload.result;
      });
    },

    [loginActions.FAILURE]: (state, action) => {
      return produce(state, (draft) => {
        draft.introError = action.payload.error;
      });
    },
  },
  initialState
);

export default reducer;
