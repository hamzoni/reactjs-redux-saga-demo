
import { Action, SortType } from '../state';
import { UserActions } from './user.action';
import { UserState } from '../state';
import { createUser } from '../../components/User/user';

const initialState = {
  users: [],
  error: null,
} as UserState;

export default function UserReducer(state: UserState = initialState, action: Action) {
  switch (action.type) {
    case UserActions.SORT_USERS: {
      const { users } = state;

      const { sortField, sortType } = action.payload;

      if (!sortField) {
        return state;
      }

      users.sort((a: any, b: any) => {
        const direction = sortType === SortType.ASC ?
          a[sortField] > b[sortField] :
          a[sortField] < b[sortField];
        return direction ? 1 : -1;
      })

      return {
        ...state,
        users
      };
    }
    case UserActions.GET_USERS_SUCCESS: {
      const { results } = action.payload.data;
      const users = results.map(createUser);

      console.log(results);

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