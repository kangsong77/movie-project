import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const detailActions = createRequestAction('DETAIL');

const initialState = {
  detailSuccess: false,
  detailError: '',
  result: {
    id: '',
    title: '',
    tagline: '',
    releaseYear: '',
    releaseDate: '',
    runtime: 0,
    rating: 0.0,
    genres: '',
    overview: '',
    posterPath: '',
    backdropPath: '',
    images: [],
    simula: [
      {
        simula_id: '',
        title: '',
        backdrop_path: '',
      },
    ],
    casts: [
      {
        cast_name: '',
        cast_role: '',
        cast_image: '',
      },
    ],
  },
};

const reducer = handleActions(
  {
    [detailActions.REQUEST]: (state, _action) => state,

    [detailActions.SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.detailSuccess = true;
        draft.result = action.payload.result;
      });
    },

    [detailActions.FAILURE]: (state, action) => {
      return produce(state, (draft) => {
        draft.detailError = action.payload.error;
      });
    },
  },
  initialState
);

export default reducer;
