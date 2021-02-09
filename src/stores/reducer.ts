

import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import { RootState } from './state';

export const rootReducer = combineReducers({
  users: UserReducer,
} as RootState | any);