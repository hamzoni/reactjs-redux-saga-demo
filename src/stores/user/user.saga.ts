
import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects'
import { UserActions } from './user.action';
import { Action, Paging } from '../state';

const ROOT_URL = 'https://randomuser.me/api/';

const fetchUsers = (page: number = 1, size: number = 10) => {
  return axios.get(`${ROOT_URL}/?page=${page}&results=${size}`);
};

function* fetchUsersAsync(payload: Paging | any) {
  const { page, size } = payload;
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
  yield takeEvery(UserActions.GET_USERS, fetchUsersAsync)
}