import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const mymovieActions = createRequestAction('MYMOVIE');

const initialState = {
  mymovieSuccess: false,
  mymovieError: '',
  result: [
    {
      id: '',
      title: '',
      backdropPath: '',
    },
  ],
};

const reducer = handleActions(
  {
    [mymovieActions.REQUEST]: (state, _action) => state,

    [mymovieActions.SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.mymovieSuccess = true;
        draft.result = action.payload.result;
      });
    },

    [mymovieActions.FAILURE]: (state, action) => {
      return produce(state, (draft) => {
        draft.mymovieError = action.payload.error;
      });
    },
  },
  initialState
);

export default reducer;
