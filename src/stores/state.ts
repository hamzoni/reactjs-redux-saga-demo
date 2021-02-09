
export interface Action {
  type: string;
  payload: any;
}

export interface Paging {
  page: number;
  size: number;
}