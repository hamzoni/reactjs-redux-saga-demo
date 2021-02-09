import { User } from "../components/User/user";

export interface Action {
  type: string;
  payload: any;
}

export enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}
export interface Paging {
  page: number;
  size: number;
  sortField?: string | any;
  sortType?: SortType;
}
export interface UserState {
  users: User[],
  error: null,
}
export interface RootState {
  users: UserState
}