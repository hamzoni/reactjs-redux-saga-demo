
import { Action } from '../state';
import { UserActions } from './user.action';
import { UserState } from '../state';
import { createUser } from '../../components/User/user';

const initialState = {
  users: [],
  error: null,
} as UserState;

export default function UserReducer(state: UserState = initialState, action: Action) {
  switch (action.type) {
    case UserActions.GET_USERS: {
      return state;
    }
    case UserActions.GET_USERS_SUCCESS: {
      const { results } = action.payload.data;
      const users = results.map(createUser);

      return {
        ...state,
        users,
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