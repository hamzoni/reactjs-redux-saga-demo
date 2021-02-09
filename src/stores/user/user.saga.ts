
import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects'
import { UserActions } from './user.action';

const ROOT_URL = 'https://randomuser.me/api/';

const fetchUsers = (page: number = 1, size: number = 10) => {
  return axios.get(`${ROOT_URL}/?page=${page}&results=${size}`);
};

function* fetchUsersAsync(page: number = 1, size: number = 10) {
  const users = yield call(fetchUsers, page, size);
  yield put({
    type: UserActions.GET_USERS_SUCCESS,
    users
  });
}

export function* watchFetchUsersAsync() {
  yield takeEvery(UserActions.GET_USERS, fetchUsersAsync)
}