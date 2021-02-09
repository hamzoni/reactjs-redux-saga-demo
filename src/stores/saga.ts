import { all, fork } from "redux-saga/effects"
import { watchFetchUsersAsync } from "./user/user.saga"

export default function* rootSaga() {
  yield all([
    watchFetchUsersAsync,
  ]);
}