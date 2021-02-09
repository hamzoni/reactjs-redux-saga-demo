export enum UserActions {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILED = 'GET_USERS_FAILED',
}

export const getUsers = (page: number = 1, size: number = 10) => {
  return {
    type: UserActions.GET_USERS,
    payload: {
      page, size
    }
  }
}