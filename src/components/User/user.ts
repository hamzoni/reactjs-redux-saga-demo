
export interface User {
  name: string,
  username: string,
  icon: string
}

export const createUser = (data: any): User => {
  const { name, login, picture } = data;
  return {
    name: `${name.title} ${name.first} ${name.last}`,
    username: login.username,
    icon: picture.thumbnail
  }
}