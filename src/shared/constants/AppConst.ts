import { AuthUser } from "types/models-types/auth-user.types";

export const authRole = {
  admin: ["admin"],
  user: ["user"],
};

export enum RoutePermittedRole {
  Admin = 'admin',
  User = 'user',
}

export const defaultUser: AuthUser = {
  uid: 'john-alex',
  fullName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};

export const initialUrl = '/dashboard'; // this url will open after login
