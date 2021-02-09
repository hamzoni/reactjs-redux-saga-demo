
import { Action } from '../state';
import { UserActions } from './user.action';
import { UserState } from '../state';

const initialState = {
  users: [],
  error: null,
} as UserState;

export default function UserReducer(state: UserState = initialState, action: Action) {
  switch (action.type) {
    case UserActions.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      }
    }
    case UserActions.GET_USERS_FAILED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}