import { Map } from 'immutable';
import { USER } from '../config/constants'
const initialState = Map({
  loading: false,
  error: null,
  user: null,
});
const actionsMap = {
  [USER.ADD_START]: (state, action) => {
    return state.merge(Map({
      loading: true,
      error: null,
      user: null,
    }));
  },
  [USER.ADD_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [USER.ADD_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      user: action.data
    }));
  }
}

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}