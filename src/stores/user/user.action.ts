
import { Action, Paging } from '../state';

export enum UserActions {
  GET_USERS = 'GET_USERS',
  SORT_USERS = 'SORT_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILED = 'GET_USERS_FAILED',
}

export const getUsers = (payload: Paging): Action => {
  return {
    type: UserActions.GET_USERS,
    payload,
  }
}

export const sortUsers = (payload: Paging): Action => {
  return {
    type: UserActions.SORT_USERS,
    payload,
  }
}