
import axios from 'axios';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { UserActions } from './user.action';
import { Action } from '../state';

const ROOT_URL = 'https://randomuser.me/api/';

const fetchUsers = (page: number = 1, size: number = 10) => {
  return axios.get(`${ROOT_URL}?page=${page}&results=${size}`);
};

function* fetchUsersAsync(action: Action | any) {
  const { page, size } = action.payload;
  try {
    const users = yield call(fetchUsers, page, size);
    yield put({
      type: UserActions.GET_USERS_SUCCESS,
      payload: users
    } as Action);
  } catch (error) {
    yield put({
      type: UserActions.GET_USERS_FAILED,
      payload: error
    } as Action);
  }
}

export function* watchFetchUsersAsync() {
  yield takeLatest(UserActions.GET_USERS, fetchUsersAsync)
}