import { takeLatest, call, put } from 'redux-saga/effects';
import { save } from '../api/user';
import { USER } from '../config/constants';

function createSaveUser() {
  return function* (options) {
    try {
      const data = yield call(() => save(data));
      const action = { type: USER.ADD_SUCCESS, data }
      yield put(action);

    } catch (error) {
      const action = { type: USER.ADD_ERROR, error }
      yield put(action);
    }
  }
}



export const saveUser = createSaveUser();
export function* userWatcher() {
  yield takeLatest(USER.ADD_START, saveUser);
}

export default [
  userWatcher(),
]