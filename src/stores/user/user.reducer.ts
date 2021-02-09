
import { User } from '../../components/User/user';
import { Action } from '../state';
import { UserActions } from './user.action';

interface StateInterface {
  users: User[]
}

const initialState = {
  users: [],
  error: null,
}

export default function UserReducer(state: StateInterface = initialState, action: Action) {
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