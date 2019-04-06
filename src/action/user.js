import { USER } from "../config/constants";

export function addUserStart() {
  return {
    type: USER.ADD_START,
    isLoading: true
  }
}
export function addUserSuccess(data) {
  return {
    type: USER.ADD_SUCCESS,
    isLoading: false,
    payload: data
  }
}
export function addUserError() {
  return {
    type: USER.ADD_ERROR,
    isLoading: false
  }
}