import { all } from 'redux-saga/effects';
import userSaga from './user';
export default function* rootSage() {
  yield all([
    ...userSaga
  ]);
}