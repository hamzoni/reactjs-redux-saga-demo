import { User } from "../components/User/user";

export interface Action {
  type: string;
  payload: any;
}

export interface Paging {
  page: number;
  size: number;
}
export interface UserState {
  users: User[],
  error: null,
}
export interface RootState {
  users: UserState
}